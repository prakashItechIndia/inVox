import { api } from '@/common/api';
import { useMutation } from '@tanstack/react-query';

export const useSetPassword = () => {
  const mutation = useMutation({
    mutationFn: async ({
      token,
      password,
      userId,
    }: {
      token: string;
      password: string;
      userId: string;
    }) => {
      const response = await api.authApi.setUserPassword({
        token,
        password,
        userId, // Use the userId from the function parameter
      });
      const data = response.data;
      return data;
    },
  });

  return mutation;
};
