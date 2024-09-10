'use client';
import { BodyForm } from './Body';
import { Header } from './Header';
import { Progress } from './Progress';

export const FormMint = () => {
  return (
    <div className='w-max h-auto bg-mainColor border-2 rounded-xl px-5 py-3 border-gray-300'>
      <Header />
      <Progress />
      <BodyForm />
    </div>
  );
};
