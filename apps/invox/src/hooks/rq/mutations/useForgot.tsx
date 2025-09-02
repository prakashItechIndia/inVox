import { api } from '@/common/api';
import { useMutation } from '@tanstack/react-query';

export const useForgot = () => {
  const mutation = useMutation({
    mutationFn: async ({ email }: { email: string }) => {
      const response = await api.authApi.forgotPassword({
        email,
      });
      const data = response.data;
      return data;
    },
  });

  return mutation;
};
