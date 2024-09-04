import { Dispatch, SetStateAction } from 'react';

export type CarouselProps = {
  blockContent: string[];
};

export type DotsProps = {
  imgIndex: number;
  setImgIndex: Dispatch<SetStateAction<number>>;
  blockContent: string[];
};

export type BlocksProps = {
  imgIndex: number;
  blockContent: string[];
};
