import { Bot, useBots } from '@/entities/bot';
import clsx from 'clsx';
import { FC } from 'react';

interface ProfitabilityProps {
  bot: Bot;
}

export const Profitability: FC<ProfitabilityProps> = ({ bot }) => {
  const currentTimeRange = useBots(state => state.currentTimeRange);
  const profitableness = bot[currentTimeRange];

  return (
    <div
      className={clsx({
        'text-green-500': profitableness > 0,
        'text-red-500': profitableness < 0,
      })}
    >
      {profitableness > 0 ? '+' : ''}
      {profitableness}%
    </div>
  );
};
