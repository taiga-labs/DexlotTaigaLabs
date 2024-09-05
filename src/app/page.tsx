'use client';
import { DexlotTaiga } from '@/components/DexlotTaiga/DexlotTaiga';
import { OrderService } from '@/components/OrderService/OrderService';
import { Preview } from '@/components/Preview/Preview';

export default function Home() {
  return (
    <main className='min-h-screen '>
      <Preview />
      <OrderService />
      <DexlotTaiga />
    </main>
  );
}
