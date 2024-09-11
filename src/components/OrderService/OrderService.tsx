import { TitleSection } from '../../shared/ui/Title/TitleSection';
import { PendingOrderInfo } from './PendingOrderInfo/PendingOrderInfo';
import { PendingOrderServiceInfo } from './PendingOrderServiceInfo/PendingOrderServiceInfo';
import { TonExchangesInfo } from './TonExchangesInfo/TonExchangesInfo';

export const OrderService = () => (
  <div className='mb-12'>
    <TitleSection titleText={'Сервис отложенных ордеров'} />
    <div className='px-12 grid md:grid-cols-2 grid-cols-1 gap-5'>
      <TonExchangesInfo />
      <PendingOrderInfo />
      <PendingOrderServiceInfo />
    </div>
  </div>
);
