import { api } from '@/common/api';
import { useMutation } from '@tanstack/react-query';

export const useLogout = () => {
  const mutation = useMutation({
    mutationFn: async ({ userId }: { userId: string }) => {
      const response = await api.authApi.signOut(userId);
      const data = response.data;
      return data;
    },
  });

  return mutation;
};
