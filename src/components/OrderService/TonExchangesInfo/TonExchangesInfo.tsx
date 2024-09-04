import { CreatorTextElement } from '@/shared/ui/CreatorPMarkerElement/CreatorTextElement';
import { MarkerText } from '@/shared/ui/Marker/MarkerText';

export const TonExchangesInfo = () => (
  <div className='max-w-full min-h-full rounded-30 bg-mainColor px-8 pt-5 py-9 text-xl space-y-5 border-gray-300 border-2 row-span-2'>
    <p>
      В сети <MarkerText className='text-blue-600' text='TON' /> для обмена активов используются следующие биржы:
    </p>

    <ul className='list-disc pl-5'>
      <li>CEX-биржы, например xRocket, CryptoBot</li>
      <li>DEX-биржы: deDust и StonFi</li>
    </ul>

    <CreatorTextElement
      className='text-purple-500'
      textMark='Самая большая ликвидность'
      text='сосредоточена в пулах обмена на Dex-биржах. Но Dexбиржы не предоставляют инструменты покупок или продаж жетонов по заданной цене, а только по текущей.'
    />

    <CreatorTextElement
      className='text-purple-500'
      textMark='CEX-биржы'
      text='имеют функционал отложенных ордеров, но имеют небольшую моментальную ликвидность и пользователь не имеет полного контроля над своим кошельком.'
    />
  </div>
);
