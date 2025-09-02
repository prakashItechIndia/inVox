// import { api } from '@/common/api';
import { useQuery } from '@tanstack/react-query';
import { sampleInvoiceJson } from "shared";


export const useGetInvoice = (
) => {
  return useQuery({
    queryKey: ["something"], // NOTE: 1 is the user id . Key is unique
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
      return sampleInvoiceJson();
    },
  });
};
