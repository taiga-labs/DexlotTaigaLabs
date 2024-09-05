import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect, useState } from 'react';

type StackItem = {
  type: 'num' | 'cell';
  num: string;
  cell: string;
};

type ItemLimitData = {
  success: boolean;
  exit_code: number;
  stack: StackItem[];
};

export interface NextItemData extends ItemLimitData {
  decoded: {
    next_item_index: string;
    collection_content: string;
    owner_address: string;
  };
}

export const Progress = () => {
  const collectionAdress = 'EQCq7PZ_Hqlf6msXHyz7S8-OoW4Y1WqpR_1aN1xNUlZ5_xnc';
  const [currentProgress, setCurrentProgress] = useState(0);
  const axiosInstance = axios.create({
    baseURL: 'https://tonapi.io/v2/',
    headers: {
      Authorization: 'Bearer AEVAMEYY6FOJLKIAAAAATVETS53BAPUGJ2URHKLKKKJKFCTDAL63I7YFQJ2GUEBEAYWSWVA',
    },
  });
  const getNextItemIndex = async () => {
    const { data } = await axiosInstance.get<NextItemData>(`blockchain/accounts/${collectionAdress}/methods/get_collection_data`);
    return data;
  };

  const getItemLimit = async () => {
    const { data } = await axiosInstance.get<NextItemData>(`blockchain/accounts/${collectionAdress}/methods/get_items_limit`);
    return data;
  };

  const { data: next_item_data, isSuccess: isSuccessNextItemData } = useQuery({
    queryKey: ['next_item'],
    queryFn: getNextItemIndex,
    staleTime: 80 * 1000,
  });

  const { data: item_limit_data, isSuccess: isSuccessItemLimitData } = useQuery({
    queryKey: ['item_limit'],
    queryFn: getItemLimit,
    staleTime: 80 * 1000,
  });

  const next_item = isSuccessNextItemData ? parseInt(next_item_data.stack[0].num, 16) : 0; // 30
  const item_limit = isSuccessItemLimitData ? parseInt(item_limit_data.stack[0].num, 16) : 0; //500
  const progressValue = Math.round((next_item / item_limit) * 100);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentProgress((prevProgress) => {
        if (prevProgress < progressValue) return Math.min(prevProgress + 1, progressValue);
        if (prevProgress > progressValue) return Math.max(prevProgress - 1, progressValue);
        clearInterval(intervalId);
        return prevProgress;
      });
    }, 10);

    return () => clearInterval(intervalId);
  }, [progressValue]);

  return (
    <div className='w-full mt-2.5 text-blue-700 font-semibold'>
      <p>
        {next_item - 1} <span className='text-[#597BD4]'>/ {item_limit}</span>
      </p>
      <div className='w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-[#9E9EA0]'>
        <div className='bg-gray-600 h-2.5 rounded-full dark:bg-bgColorUIElement ' style={{ width: `${currentProgress}%` }}></div>
      </div>
      <p className='text-[#05FF00]'>{currentProgress}%</p>
    </div>
  );
};
