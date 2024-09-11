'use client';
import { BodyForm } from './Body';
import { Header } from './Header';
import { Progress } from './Progress';

export const FormMint = () => {
  return (
    <div className='max-w-[408px] h-auto bg-mainColor border-2 rounded-30 px-5 py-3 border-gray-300 gap-4'>
      <Header />
      <Progress />
      <BodyForm />
    </div>
  );
};
