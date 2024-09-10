import NftGif from '@/assets/gif/nft_ani_1024.gif';

export const Advantages = () => (
  <div className='w-auto max-w-full md:w-[408px] h-min bg-mainColor border-2 border-gray-300 rounded-xl items-center flex flex-col pt-2'>
    <h1 className='text-xl text-textColor font-title text-center mt-4'>Вы получаете</h1>
    <img src={NftGif.src} className='w-[300px] h-[300px] bg-lime-500 rounded-sm mt-[14px]' />

    <div className='text-sm md:text-base text-textColor pl-4 mt-3'>
      <h3>🌲 Елки - мультироутинг по всем dex</h3>
      <h3>⭐ Звезда - приоритет в очереди на исполнение</h3>
      <h3>💫 Северное сияние -10% комиссии сервиса за каждый уровень</h3>
      <h3>⛄ Сугробы - опция сделок по времени (DCA)</h3>
      <h3>⚪ Точки на графике +10% от реферала</h3>
      <h3>💎 Алмазы - доля прибыли сервиса</h3>
    </div>
  </div>
);
