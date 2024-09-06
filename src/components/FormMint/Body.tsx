'use client';

import images2 from '@/assets/img/base+star.png';
import images1 from '@/assets/img/base.png';
import { useQueryClient } from '@tanstack/react-query';
import Image from 'next/image';
import { useState } from 'react';

export const BodyForm = () => {
  const [switcherState, setSwitcherState] = useState(true);
  return (
    <div className='w-full h-full bg-red-400'>
      <Switcher state={switcherState} setState={setSwitcherState} />

      <div className='flex justify-center items-center'>
        <Image src={switcherState ? images2 : images1} width={254} height={254} alt='nft' className='object-cover bg-center rounded-xl' />
      </div>

      <Form switcherState={switcherState} setState={setSwitcherState} />
    </div>
  );
};

const Switcher = ({ state, setState }: { state: boolean; setState: React.Dispatch<React.SetStateAction<boolean>> }) => {
  return (
    <div className='flex flex-row justify-between items-center my-5'>
      <h3 className='font-semibold'>Обычная nft</h3>
      <label className='inline-flex items-center cursor-pointer'>
        <input type='checkbox' className='sr-only peer' onClick={() => setState(!state)} defaultChecked={state} />
        <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-[#9E9EA0] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-transform after:duration-300 dark:border-gray-600 peer-checked:bg-blue-600"></div>
      </label>
      <h3 className='font-semibold'>Расширенная nft</h3>
    </div>
  );
};

const Form = ({ switcherState, setState }: { switcherState: boolean; setState: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const queryClient = useQueryClient();
  console.log(queryClient.getQueryData(['item_limit']));

  return (
    <div>
      <p>ffffffffffffff</p>
    </div>
  );
};
