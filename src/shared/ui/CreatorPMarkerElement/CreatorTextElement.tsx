import { FC } from 'react';
import { MarkerText } from '../Marker/MarkerText';

export type CreatorTextElementProps = {
  textMark: string;
  text: string;
  className: string;
};

export const CreatorTextElement: FC<CreatorTextElementProps> = ({ className, text, textMark }) => (
  <p>
    <MarkerText className={className} text={textMark} /> {text}
  </p>
);
