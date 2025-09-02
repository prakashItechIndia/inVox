import { makeAutoObservable } from 'mobx';

import { CacheKey } from '../common/constant';
import { UserData } from '../type';
import {
  GetUserResponse,
  InvoxUserType,
  LocalStorage,
  SignInResponse,
} from 'shared';
import { secretKey } from '@/config/env';

const SECRET_KEY = secretKey || '';

type ExchangeTokenAction = (currentRefreshToken: string) => Promise<{
  accessToken: string;
  refreshToken: string;
}>;

type GetUserInfoAction = (userId: string) => Promise<GetUserResponse | null>;

export class AppState {
  private _user: UserData | null = null;
  private _userInfo: GetUserResponse | null = null;

  private _ready = false;
  private _preferSidebarOpen = true;

  private _exchangeTokenActionCallback: null | ExchangeTokenAction = null;
  private _getUserInfoActionCallback: null | GetUserInfoAction = null;

  private _randomNum: string = '';

  constructor() {
    makeAutoObservable(this);
    this._loadData();
  }

  private _loadData() {
    this._populateUserData();
    this._loadSidebarPreference();
  }

  get ready() {
    return this._ready;
  }

  private _setReady(value: boolean) {
    this._ready = value;
  }

  get user() {
    return this._user;
  }

  get preferSidebarOpen() {
    return this._preferSidebarOpen;
  }

  private _loadSidebarPreference = () => {
    const sidebarOpen = LocalStorage.get<boolean>(
      CacheKey.PreferSidebarOpen,
      SECRET_KEY,
    );
    if (sidebarOpen === null || sidebarOpen === undefined) {
      return;
    }
    this._setPreferSidebarOpen(!!sidebarOpen);
  };

  private _setPreferSidebarOpen = (open: boolean) => {
    this._preferSidebarOpen = open;
  };

  setUserInfo = (user: GetUserResponse) => {
    this._userInfo = user;
  };

  get userInfo() {
    return this._userInfo;
  }

  savePreferSidebarOpen = (open: boolean) => {
    this._setPreferSidebarOpen(open);
    LocalStorage.save(CacheKey.PreferSidebarOpen, open, SECRET_KEY);
  };

  setUser = (userData: UserData | null) => {
    this._user = userData;
    LocalStorage.save(CacheKey.User, this._user, SECRET_KEY);
  };

  removeUser = () => {
    this._user = null;
    LocalStorage.delete(CacheKey.User);
  };

  removeSidebarPreference = () => {
    this._setPreferSidebarOpen(true);
    LocalStorage.delete(CacheKey.PreferSidebarOpen);
  };

  get authTokenVersion() {
    return this.user?._authTokenVersion;
  }

  get isUserAuthenticated() {
    return !!this._user?.id;
  }

  setLoginInfo(params: SignInResponse) {
    const { userId, accessToken, refreshToken, userType } = params;
    this.setUser({
      _authTokenVersion: 0,
      accessToken,
      userType: userType as InvoxUserType,
      id: userId,
      refreshToken,
    });
  }

  private _populateUserData = () => {
    const userData = LocalStorage.get<UserData>(CacheKey.User, SECRET_KEY);
    this.setUser(userData);
    this._setReady(true);
  };

  logout = () => {
    // TODO: Reset other state data
    this.removeUser();
    this.removeSidebarPreference();
  };

  private _exchangePromise: Promise<null> | null = null;

  setExchangePromise = (promise: Promise<null> | null) => {
    this._exchangePromise = promise;
  };

  exchangeOnlyOnce = async () => {
    if (this._exchangePromise) {
      return this._exchangePromise;
    }

    try {
      this.setExchangePromise(this._exchangeToken());
      await this._exchangePromise!;
    } finally {
      this.setExchangePromise(null);
    }
  };

  setTokens = (accessToken: string, refreshToken: string) => {
    if (this.user) {
      this.setUser({
        ...this.user,
        _authTokenVersion: this.user._authTokenVersion + 1,
        accessToken,
        refreshToken,
      });
    }
  };

  setExchangeTokenAction = async (cb: ExchangeTokenAction) => {
    this._exchangeTokenActionCallback = cb;
  };

  private async _exchangeToken() {
    const refreshToken = this.user?.refreshToken;

    if (refreshToken) {
      try {
        const result = await this._exchangeTokenActionCallback?.(refreshToken);

        if (result) {
          this.setTokens(result.accessToken, result.refreshToken);
        }
      } catch (e) {
        this.logout();
        return null;
      }
    }

    return null;
  }

  setUserInfoApi = async (cb: GetUserInfoAction) => {
    this._getUserInfoActionCallback = cb;
  };

  async _getUserInfo() {
    const userId = this.user?.id;

    if (userId) {
      try {
        const result = await this._getUserInfoActionCallback?.(userId);

        if (result) {
          this.setUserInfo(result);
        }
      } catch (e) {
        return null;
      }
    }

    return null;
  }

  setRandomNum = (num: string) => {
    this._randomNum = num;
  };
  get randomNum() {
    return this._randomNum;
  }
}
