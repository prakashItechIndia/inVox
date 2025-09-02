import { useMutation } from '@tanstack/react-query';
import { appState } from '@/state';
import { api } from '@/common/api';

export const useLogin = () => {
  const mutation = useMutation({
    mutationFn: async ({
      userName,
      password,
    }: {
      userName: string;
      password: string;
    }) => {
      const response = await api.authApi.signIn({
        email: userName,
        password,
      });
      const data = response.data;
      appState.setLoginInfo(data);
      return data;
    },
  });

  return mutation;
};
