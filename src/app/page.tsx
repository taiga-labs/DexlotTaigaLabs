'use client';
import { DexlotTaiga } from '@/components/DexlotTaiga/DexlotTaiga';
import { FormMint } from '@/components/FormMint/FormMint';
import { OrderService } from '@/components/OrderService/OrderService';
import { TonConnectButton } from '@tonconnect/ui-react';

export default function Home() {
  return (
    <main className='min-h-screen '>
      <TonConnectButton />
      <OrderService />
      <DexlotTaiga />
      <FormMint />
    </main>
  );
}
