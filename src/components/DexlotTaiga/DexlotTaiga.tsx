import { SwipeCarousel } from '@/shared/ui/Carousel/Carousel';
import { TitleSection } from '@/shared/ui/Title/TitleSection';
import { Advantages } from '../FormMint/Advantages';
import { Description } from '../FormMint/Description';
import { FormMint } from '../FormMint/FormMint';

const text: string[] = [
  'Интерактивный график: пользователю не надо больше вводить цену и количество клавиатурой, достаточно выставить точку на графике.',
  'Средняя цена покупок жетона в кошельке: пользователю на графике будет отображена линия средней цены его покупок выбранного жетона.',
  'Современный мультироутинг: распределенное одновременное совершение сделки на всех Dex-биржах и пулах внутри них и даже CEX=xRocket.',
  'Уникальная гибка настройка условий совершения сделки через NFT',
  'Возможность получения процента прибыли с сервиса',
];

export const DexlotTaiga = () => (
  <div>
    <TitleSection titleText='“DexLOT” by Taiga.Labs' />
    <div className='w-max h-fit flex flex-col gap-7 px-12 md:flex-row md:w-auto'>
      <div className='flex flex-col gap-y-7 w-auto'>
        <GoalTaiga />
        <SwipeCarousel blockContent={text} />
      </div>
      <div className='self-center w-max grid grid-cols-1 gap-5 md:grid-cols-2'>
        <div className='col-span-1 grid gap-5'>
          <Description />
          <Advantages />
        </div>
        <FormMint />
      </div>
    </div>
  </div>
);

const GoalTaiga = () => (
  <div className='w-fit max-w-[632px] h-max rounded-30 bg-mainColor px-8 pt-5 py-9 text-xl space-y-5 border-gray-300 border-2'>
    <h2 className='text-xl font-bold'>Цель</h2>
    <p>
      Создать удобное веб-апп приложение для пользователей, которые не хотят мониторить рынок, чтобы продать или купить любой актив по нужной им
      цене вне зависимости от биржи.
    </p>
  </div>
);
