import { useTimeStore } from '@/store/Time';

export const FormMint = () => {
  const { time } = useTimeStore();
  return (
    <div>
      <h1>{time}</h1>
    </div>
  );
};
