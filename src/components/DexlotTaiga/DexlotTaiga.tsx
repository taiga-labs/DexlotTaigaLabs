import { SwipeCarousel } from '@/shared/ui/Carousel/Carousel';
import { TitleSection } from '@/shared/ui/Title/TitleSection';

const text: string[] = [
  'Интерактивный график: пользователю не надо больше вводить цену и количество клавиатурой, достаточно выставить точку на графике.',
  'Средняя цена покупок жетона в кошельке: пользователю на графике будет отображена линия средней цены его покупок выбранного жетона.',
  'Современный мультироутинг: распределенное одновременное совершение сделки на всех Dex-биржах и пулах внутри них и даже CEX=xRocket.',
  'Уникальная гибка настройка условий совершения сделки через NFT',
  'Возможность получения процента прибыли с сервиса',
];

export const DexlotTaiga = () => (
  <div>
    <TitleSection titleText='“DexLOT” by Taiga.Labs' subTitleText='Не переживай за завтра – создай ордер сегодня!' />
    <div className='px-12 flex flex-col gap-7'>
      <GoalTaiga />
      <SwipeCarousel blockContent={text} />
    </div>
  </div>
);

const GoalTaiga = () => (
  <div className='max-w-xl h-fit rounded-30 bg-mainColor px-8 pt-5 py-9 text-xl space-y-5 border-gray-300 border-2'>
    <h2 className='text-xl font-bold'>Цель</h2>
    <p>
      Создать удобное веб-апп приложение для пользователей, которые не хотят мониторить рынок, чтобы продать или купить любой актив по нужной им
      цене вне зависимости от биржи.
    </p>
  </div>
);
