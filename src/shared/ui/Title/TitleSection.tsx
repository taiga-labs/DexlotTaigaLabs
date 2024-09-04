type TitleSectionProps = {
  titleText: string | number;
  subTitleText?: string | number;
};
export const TitleSection = ({ titleText, subTitleText }: TitleSectionProps) => (
  <div className='flex flex-col gap-3 mb-12 bg-blue-200'>
    <h1 className='text-3xl font-bold pl-3 text-teal-900'>{titleText}</h1>
    {subTitleText && <p className='text-base font-bold'>{subTitleText}</p>}
  </div>
);
