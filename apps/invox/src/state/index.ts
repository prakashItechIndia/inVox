import { api, httpClient } from '@/common/api';
import { InvoxUserType, setupHttpInterceptors } from 'shared';
import { AppState } from './AppState';

export const appState = new AppState();

setupHttpInterceptors(httpClient, appState);

appState.setExchangeTokenAction(async (currentRefreshToken) => {
  const response = await api.authApi.refreshToken({
    refreshToken: currentRefreshToken,
  });

  const { accessToken, refreshToken } = response.data;

  return {
    accessToken,
    refreshToken,
  };
});

appState.setUserInfoApi(async (userId) => {
  const response = await api.userApi.getUserList(
    InvoxUserType.organisationAdmin,
    undefined,
    undefined,
    'ASC',
    'firstName',
    undefined,
    userId,
  );
  return response?.data?.data ? response?.data?.data[0] : null;
});
