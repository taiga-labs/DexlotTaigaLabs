import { getCountdownValues } from '@/shared/func/TimerEvent';
import { useTimeStore } from '@/store/Time';
import { Temporal } from '@js-temporal/polyfill';
import { useEffect, useState } from 'react';

export interface CountdownResult {
  dateTime: string;
  status: string;
  countdown: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
}

export const Header = () => {
  const [countdownResult, setCountdownResult] = useState<CountdownResult | null>(null);
  const { setTime } = useTimeStore();

  useEffect(() => {
    const startDate = Temporal.PlainDate.from({ year: 2024, month: 9, day: 28 });
    const startTime = Temporal.PlainTime.from({ hour: 0, minute: 0 });

    const targetDate = Temporal.PlainDate.from({ year: 2024, month: 9, day: 29 });
    const targetTime = Temporal.PlainTime.from({ hour: 0, minute: 0 });

    const updateCountdown = () => {
      setCountdownResult(getCountdownValues(startDate, startTime, targetDate, targetTime));
    };

    updateCountdown();
    const intervalId = setInterval(updateCountdown, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const statusClasses: Record<string, string> = {
    'До начала события': 'text-blue-700 font-semibold',
    'До конца события': 'text-teal-700 font-semibold',
    'Событие завершено': 'text-gray-700 font-semibold',
  };

  useEffect(() => {
    if (countdownResult?.status === 'Событие завершено' || countdownResult?.status === 'До начала события') {
      console.log(countdownResult?.status, 'time status');

      setTime(countdownResult.status);
    }
  }, [countdownResult?.status]);

  return countdownResult ? (
    <div className='w-max bg-backgroundFormColor rounded-sm text-start flex flex-col items-start'>
      <div className='flex flex-col gap-4 w-full text-[#aeaeb0]'>
        <div className='flex flex-col gap-1 justify-between'>
          <p>{countdownResult.dateTime}</p>
          <p className={statusClasses[countdownResult.status]}>{countdownResult.status}</p>
        </div>
        <div className='flex flex-row gap-8 justify-between w-full'>
          <div className='text-textColor font-semibold text-center w-10 h-10 border-2 border-gray-300 rounded-lg flex justify-center items-center p-8'>
            {countdownResult.countdown.days} day
          </div>
          <div className='text-textColor font-semibold text-center w-10 h-10 border-2 border-gray-300 rounded-lg flex justify-center items-center p-8'>
            {countdownResult.countdown.hours.toString().padStart(2, '0')} hour
          </div>
          <div className='text-textColor font-semibold text-center w-10 h-10 border-2 border-gray-300 rounded-lg flex justify-center items-center p-8'>
            {countdownResult.countdown.minutes.toString().padStart(2, '0')} min
          </div>
          <div className='text-textColor font-semibold text-center w-10 h-10 border-2 border-gray-300 rounded-lg flex justify-center items-center p-8'>
            {countdownResult.countdown.seconds.toString().padStart(2, '0')} sec
          </div>
        </div>
      </div>
    </div>
  ) : null;
};
