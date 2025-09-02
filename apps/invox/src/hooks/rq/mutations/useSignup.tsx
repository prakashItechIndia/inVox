import { useMutation } from '@tanstack/react-query';
import { doNothing, wait } from 'shared';

export const useSignup = () => {
  const mutation = useMutation({
    mutationFn: async ({
      email,
      password,
    }: {
      email: string;
      password: string;
    }) => {
      await wait(2000);
      doNothing(email, password);
    },
  });

  return mutation;
};
