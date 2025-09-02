import { api } from '@/common/api';
import { ReactQueryKey } from '@/common/constant';
import { useQuery } from '@tanstack/react-query';

export const useGetRoles = () => {
  return useQuery({
    queryKey: [ReactQueryKey.Roles], // Updated to use Roles key
    queryFn: async () => {
      const response = await api.roleApi.getUserRoles();
      return response?.data?.data;
    },
  });
};
