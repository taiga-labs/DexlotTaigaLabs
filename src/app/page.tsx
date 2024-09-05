'use client';
import { FormMint } from '@/components/FormMint/FormMint';
import { OrderService } from '@/components/OrderService/OrderService';

export default function Home() {
  return (
    <main className='min-h-screen '>
      <OrderService />
      {/* <DexlotTaiga /> */}
      <FormMint />
    </main>
  );
}
