import { botData } from '@/entities/bot';
import { FC } from 'react';
import { BotItem } from './BotItem';

export const BotList: FC = () => {
  return (
    <div className="mt-1 mb-4 flex flex-wrap justify-center gap-0.5">
      {botData.bots.map(bot => (
        <BotItem key={bot.name} item={bot} />
      ))}
    </div>
  );
};
