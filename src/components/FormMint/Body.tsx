import images2 from '@/assets/img/base+star.png';
import images1 from '@/assets/img/base.png';
import { createBodyCellTransaction } from '@/shared/func/CreateTransaction';
import { useGetItemLimit } from '@/shared/hooks/SkGetters/getItemLimit';
import { useGetNextItemIndex } from '@/shared/hooks/SkGetters/getNextItem';
import { useTimeStore } from '@/store/Time';
import { useTonAddress, useTonConnectUI } from '@tonconnect/ui-react';
import axios from 'axios';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

export const BodyForm = () => {
  const [switcherState, setSwitcherState] = useState(true);
  return (
    <div className='w-full h-full'>
      <Switcher state={switcherState} setState={setSwitcherState} />

      <div className='flex justify-center items-center'>
        <Image
          src={switcherState ? images2 : images1}
          width={254}
          height={254}
          alt='nft'
          className='object-cover bg-center rounded-xl border-gray-300 border-2'
        />
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
  interface IForm {
    value: number;
  }

  const searchParams = useSearchParams();
  const ref = searchParams.get('ref');

  // цены на NFT
  const priceBaseNft = 17;
  const priceAdvancedNft = 25;
  const price = switcherState ? priceAdvancedNft : priceBaseNft; //!!!!!!!!!!

  const address = useTonAddress();
  const [tonConnectUI] = useTonConnectUI();

  const { data: next_item_data, isSuccess: isSuccessNextItemData } = useGetNextItemIndex();
  const { data: item_limit_data, isSuccess: isSuccessItemLimitData } = useGetItemLimit();
  const next_item = isSuccessNextItemData && next_item_data ? parseInt(next_item_data.stack[0].num, 16) : 0; // 30
  const item_limit = isSuccessItemLimitData && item_limit_data ? parseInt(item_limit_data.stack[0].num, 16) : 0; //500

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IForm>({
    mode: 'onChange',
  });
  const value = Number(watch('value', 1));

  const onSubmit: SubmitHandler<IForm> = async (data) => {
    if (!(next_item + value > item_limit + 1)) {
      const transaction = createBodyCellTransaction(price, data.value);
      const result = await tonConnectUI.sendTransaction(transaction);
      const json = {
        address: address,
        ref: ref,
        hash: result.boc,
      };
      console.log(ref, 'ref');
      if (result) {
        const response = await axios.post('https://taiga-labs.pro/taiga_nft_buy/save', json);
        console.log(`status: ${response.data.status} | statusText: ${response.statusText}`);
      }
    }
  };

  const { time } = useTimeStore();

  const isStopEvents = {
    isStopEvent: time.timeStatus === 'Событие завершено',
    isBeforeStartEvent: time.timeStatus === 'До начала события',
  };
  const isStopEventDisable = isStopEvents.isBeforeStartEvent || isStopEvents.isStopEvent;

  return (
    <form className='flex flex-col gap-3 mt-14' onSubmit={handleSubmit(onSubmit)}>
      <h3>Amount up to 10</h3>
      <input
        type='number'
        min={0}
        placeholder='enter the number'
        className={`
          w-full h-13 bg-transparent rounded-xl p-3 border-bgColorUIElement border-2 outline-none 
          ${errors.value || next_item + Number(value) > item_limit + 1 ? 'border-red-500' : ''}`}
        defaultValue={1}
        {...register('value', {
          required: true,
          min: 1,
          max: 10,
          disabled: isStopEventDisable,
        })}
      />
      <div className='flex flex-col gap-1 w-full h-min'>
        {errors.value || next_item + Number(value) > item_limit + 1 ? (
          <p className='text-red-500 font-bold'>Неверное введенное значение</p>
        ) : null}
      </div>
      <button
        type='submit'
        disabled={isStopEventDisable}
        className={`
          w-full h-12 rounded-xl text-white font-semibold 
          ${isStopEventDisable ? 'bg-bgColorUIElement opacity-50' : 'bg-[#667286]'}`}>
        {isStopEvents.isStopEvent
          ? 'Продажи прекращены'
          : isStopEvents.isBeforeStartEvent
          ? 'Продажи не начались'
          : switcherState
          ? `Buy for ${priceAdvancedNft * value} ton`
          : `Buy for ${priceBaseNft * value} ton`}
      </button>
    </form>
  );
};
