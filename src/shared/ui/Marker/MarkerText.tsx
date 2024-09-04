import { FC } from 'react';

type MarkerTextProps = {
  text: string;
  className: string;
};

export const MarkerText: FC<MarkerTextProps> = ({ text, className }) => <span className={className}>{text}</span>;
