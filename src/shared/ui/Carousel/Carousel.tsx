'use client';

import { motion, useMotionValue } from 'framer-motion';
import { FC, useEffect, useState } from 'react';
import { BlocksProps, CarouselProps, DotsProps } from './types/types';

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: 'spring',
  mass: 3,
  stiffness: 400,
  damping: 50,
};

export const SwipeCarousel: FC<CarouselProps> = ({ blockContent }) => {
  const [imgIndex, setImgIndex] = useState(0);

  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => {
          if (pv === blockContent.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < blockContent.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <div className='relative overflow-hidden bg-mainColor w-3/6 h-fit rounded-30 '>
      <motion.div
        drag='x'
        dragConstraints={{ left: 0, right: 0 }}
        style={{ x: dragX }}
        animate={{ translateX: `-${imgIndex * 100}%` }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className='flex cursor-grab items-center active:cursor-grabbing'>
        <Blocks imgIndex={imgIndex} blockContent={blockContent} />
      </motion.div>

      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} blockContent={blockContent} />
    </div>
  );
};

const Blocks: FC<BlocksProps> = ({ imgIndex, blockContent }) => {
  return (
    <>
      {Array.from({ length: blockContent.length }).map((_, index) => {
        return (
          <motion.div
            key={index}
            animate={{ scale: imgIndex === index ? 0.95 : 0.85 }}
            transition={SPRING_OPTIONS}
            style={{ transform: 'none' }}
            className='w-full h-fit shrink-0 rounded-30 bg-mainColor px-8 pt-5 py-9 text-xl border-gray-300 border-2 text-textColor'>
            {blockContent[index]}
          </motion.div>
        );
      })}
    </>
  );
};

const Dots: FC<DotsProps> = ({ blockContent, imgIndex, setImgIndex }) => {
  return (
    <div className='mt-4 flex w-full justify-center gap-2'>
      {blockContent.map((_, index) => {
        return (
          <button
            key={index}
            onClick={() => setImgIndex(index)}
            className={`h-3 w-3 rounded-full transition-colors ${index === imgIndex ? 'bg-blue-600' : 'bg-neutral-500'}`}
          />
        );
      })}
    </div>
  );
};
