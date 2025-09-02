/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosInstance } from 'axios';
import { type HttpClientMinState } from '../type';
import { toast } from 'sonner';

export const createHttpClient = () => {
  const httpClient = axios.create();
  return httpClient;
};

export const setupHttpInterceptors = (
  httpClient: AxiosInstance,
  httpClientMinState: HttpClientMinState,
) => {
  httpClient.interceptors.request.use((config) => {
    const { user, authTokenVersion } = httpClientMinState;
    if (user) {
      const { accessToken } = user;
      const authHeaders = accessToken
        ? { Authorization: `Bearer ${accessToken}` }
        : {};

      (config as any).headers = {
        ...config.headers,
        ...authHeaders,
      };
      (config as any)._authTokenVersion = authTokenVersion;
    }

    return config;
  });
  httpClient.interceptors.response.use(undefined, async (err) => {
    const { config, response } = err;
    const statusCode = +response?.status;

    // Handle token expiration (401)
    if (statusCode === 401 && !config._retried && !config._skipExchange) {
      config._retried = true;
      try {
        if (config._authTokenVersion === httpClientMinState.authTokenVersion) {
          await httpClientMinState.exchangeOnlyOnce();
        }
        return httpClient(config);
      } catch (refreshError) {
        toast.error('Session expired! Please login again.');
        throw {
          message: 'Session expired! Please login again.',
          error: refreshError,
        };
      }
    }
    // Handle other errors
    if (err.response?.data instanceof Blob) {
      throw await (err.response.data as Blob)
        .text()
        .then((errMessage: string) => {
          try {
            const message = JSON.parse(errMessage);
            return {
              message:
                statusCode === 403
                  ? 'Session expired! Please login again.'
                  : message?.message,
            };
          } catch (error) {
            return {
              message:
                statusCode === 403
                  ? 'Session expired! Please login again.'
                  : 'Something went wrong ...!',
            };
          }
        })
        .catch((blobError: Error) => {
          return {
            message: blobError?.message,
          };
        });
    } else {
      throw {
        message:
          statusCode === 403
            ? 'Session expired! Please login again.'
            : err.response?.data?.message ||
              err.response?.data ||
              'Something went wrong ...!',
        error: err.response?.data?.error || [],
      };
    }
  });
};
