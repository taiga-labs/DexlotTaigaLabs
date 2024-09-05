'use client';
import { AnimatedTextWord } from '@/shared/ui/AnimateText/AnimateText';
import { TonConnectButton } from '@tonconnect/ui-react';
import { motion } from 'framer-motion';

export const Preview = () => (
  <div
    className='w-full h-screen text-white flex flex-col justify-center items-center gap-4 mb-10'
    style={{ background: 'radial-gradient(50.00% 50.00% at 50.00% 50.00%, #003A29 0%, #151515 100%)' }}>
    <AnimatedTextWord text='Taiga Labs DexLOT' className='text-9xl font-bold' />
    <motion.h3
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        delay: 0.5,
        ease: [0, 0.05, 0.14, 0.21],
      }}
      className='text-4xl font-semibold'>
      Не переживай за завтра – создай ордер сегодня!
    </motion.h3>

    <TonConnectButton className='absolute top-4 right-20' />
  </div>
);
