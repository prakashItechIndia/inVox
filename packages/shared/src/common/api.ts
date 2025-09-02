import { AxiosInstance } from 'axios';
import {
  AuthApi,
  RoleApi,
  StatesApi,
  UserApi,
} from '../_api';

export const setupHttpEndpoints = (
  httpClient: AxiosInstance,
  apiEndpoint: string,
) => {
  const authApi = new AuthApi(undefined, apiEndpoint, httpClient);
  const userApi = new UserApi(undefined, apiEndpoint, httpClient);
  const roleApi = new RoleApi(undefined, apiEndpoint, httpClient);
  const stateApi = new StatesApi(undefined, apiEndpoint, httpClient);

  return {
    authApi,
    userApi,
    roleApi,
    stateApi,
  };
};
