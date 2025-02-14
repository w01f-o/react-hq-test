import { Bot, useBots } from '@/entities/bot';
import { Profitability } from '@/shared/ui';
import clsx from 'clsx';
import { FC } from 'react';
import { BotIcon } from './BotIcon';

interface BotItemProps {
  item: Bot;
}

const botNames: Record<string, string> = {
  white_bot: 'Attack',
  yellow_bot: 'Megabot',
  green_bot: 'Defence',
  blue_bot: 'Balance',
  red_bot: 'Attack',
  orange_bot: 'Attack',
};

export const BotItem: FC<BotItemProps> = ({ item }) => {
  const currentBot = useBots(state => state.currentBot);
  const setCurrentBot = useBots(state => state.setCurrentBot);

  return (
    <button
      className={clsx(
        'bg-blue-light-secondary flex size-[31vw] flex-col items-center justify-end gap-2 rounded-md pb-3 text-sm leading-none uppercase transition-shadow min-[410px]:text-lg lg:size-42',
        {
          'shadow-[inset_0px_0px_38px_20px_#283750]': item.name === currentBot,
        }
      )}
      onClick={setCurrentBot(item.name)}
    >
      <BotIcon name={item.name} />
      <div>{botNames[item.name] ?? item.name}</div>
      <Profitability bot={item} />
    </button>
  );
};
