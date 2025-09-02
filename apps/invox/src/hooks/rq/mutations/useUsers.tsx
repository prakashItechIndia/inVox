/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from '@/common/api';
import { useMutation } from '@tanstack/react-query';

export const useUsersAdd = () => {
  const mutation = useMutation({
    mutationFn: async (bodyData: any) => {
      const response = await api.userApi.createNewUser(bodyData);
      const data = response.data;
      return data;
    },
  });

  return mutation;
};

export const useUsersEdit = (userId: string) => {
  const mutation = useMutation({
    mutationFn: async (bodyData: any) => {
      const response = await api.userApi.updateUser(
        userId,
        bodyData.firstName,
        bodyData.lastName,
        bodyData.email,
        bodyData.roleId,
        bodyData.delinquentAlert ?? false,
        bodyData.escrowAlert ?? false,
        bodyData.status ?? false,
        bodyData.isReadOnly ?? false,
        bodyData.userType || '',
        bodyData.countryCode || undefined,
        bodyData.phoneNumber || undefined,
        bodyData.removedPictureId || undefined,
        bodyData.file || '',
      );
      const data = response.data;
      return data;
    },
  });

  return mutation;
};
