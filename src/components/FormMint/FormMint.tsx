'use client';
import { BodyForm } from './Body';
import { Header } from './Header';
import { Progress } from './Progress';

export const FormMint = () => {
  return (
    <div className='w-max h-auto bg-mainColor border-2 rounded-xl px-5 py-3 md:px-5 md:py-3 grid items-center row-span-2 md:order-2 order-1 justify-self-center self-center md:justify-self-start md:self-start'>
      <Header />
      <Progress />
      <BodyForm />
    </div>
  );
};
