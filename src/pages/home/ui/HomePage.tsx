import { TimeRange } from '@/widgets/time-range';
import { FC } from 'react';

export const HomePage: FC = () => {
  return (
    <div className="flex h-full items-end justify-center py-6">
      <TimeRange />
    </div>
  );
};
