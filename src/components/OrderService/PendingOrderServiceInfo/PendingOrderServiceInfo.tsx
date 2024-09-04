import { CreatorTextElement } from '@/shared/ui/CreatorPMarkerElement/CreatorTextElement';

export const PendingOrderServiceInfo = () => (
  <div className='max-w-[632px] h-max rounded-30 bg-mainColor px-8 pt-5 py-9 text-xl space-y-5 border-gray-300 border-2 '>
    <CreatorTextElement
      className='text-cyan-300'
      textMark='Отложенный ордер'
      text='– это заявка на покупку или продажу, которая должна исполнится не по текущей цене, а по заданной пользователем.'
    />
  </div>
);
