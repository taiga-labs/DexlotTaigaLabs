import { NextItemData } from '@/components/FormMint/Progress';
import { axiosInstance, collectionAdress } from '@/shared/global/global';
import { useQuery } from '@tanstack/react-query';

const getItemLimit = async () => {
  const { data } = await axiosInstance.get<NextItemData>(`blockchain/accounts/${collectionAdress}/methods/get_items_limit`);
  return data;
};

export const useGetItemLimit = () => {
  const { data, isSuccess } = useQuery({
    queryKey: ['item_limit'],
    queryFn: getItemLimit,
    staleTime: 80 * 1000,
  });

  return { data, isSuccess };
};
