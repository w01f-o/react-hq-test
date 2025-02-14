import { BotList } from '@/widgets/bots';
import { TimeRange } from '@/widgets/time-range';
import { TradingChart } from '@/widgets/trading-chart';
import { TradingInfo } from '@/widgets/trading-info';
import { FC } from 'react';

export const HomePage: FC = () => {
  return (
    <div className="flex h-full flex-col">
      <TradingInfo />
      <TradingChart />
      <BotList />
      <TimeRange />
    </div>
  );
};
