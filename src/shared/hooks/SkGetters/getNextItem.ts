import { NextItemData } from '@/components/FormMint/Progress';
import { axiosInstance, collectionAdress } from '@/shared/global/global';
import { useQuery } from '@tanstack/react-query';

const getNextItemIndex = async () => {
  const { data } = await axiosInstance.get<NextItemData>(`blockchain/accounts/${collectionAdress}/methods/get_collection_data`);
  return data;
};

export const useGetNextItemIndex = () => {
  const { data, isSuccess } = useQuery({
    queryKey: ['next_item'],
    queryFn: getNextItemIndex,
    staleTime: 80 * 1000,
  });

  return { data, isSuccess };
};
