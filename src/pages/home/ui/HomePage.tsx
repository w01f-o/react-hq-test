import { BotList } from '@/widgets/bots/ui';
import { TimeRange } from '@/widgets/time-range';
import { FC } from 'react';

export const HomePage: FC = () => {
  return (
    <div className="flex h-full flex-col items-center justify-end py-6">
      <BotList />
      <TimeRange />
    </div>
  );
};
