import { InvoxUserType } from 'shared';

export const EnvList = [
  'local',
  'development',
  'qa',
  'staging',
  'production',
] as const;

export interface UserData {
  id: string;
  accessToken: string;
  refreshToken: string;
  _authTokenVersion: number;
  userType: InvoxUserType;
}

export interface FakeUser {
  name: { first: string; last: string };
  email: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}

export type LanguageType = 'en';

export type ApiEndpointUrl = string;
