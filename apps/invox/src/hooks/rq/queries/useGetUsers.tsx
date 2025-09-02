// import { api } from '@/common/api';
import { ReactQueryKey } from '@/common/constant';
import { useQuery } from '@tanstack/react-query';
import { InvoxUserType, sampleUserJson } from 'shared';


export const useGetUsersList = (
  type: InvoxUserType,
  userId?: string,
  randomKey?: string,
) => {
  return useQuery({
    queryKey: [ReactQueryKey.Users, type, userId, randomKey], // NOTE: 1 is the user id . Key is unique
    queryFn: async () => {
      // const response = await api.userApi.getUserList(
      //   type,
      //   0,
      //   50,
      //   'ASC',
      //   'firstName',
      //   undefined,
      //   userId,
      // );
      // return response?.data?.data;
      return sampleUserJson();
    },
  });
};
