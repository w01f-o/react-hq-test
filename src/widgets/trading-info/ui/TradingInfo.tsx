import { botData } from '@/entities/bot';
import { HCoinIcon } from '@/shared/ui/icons/HCoinIcon';
import { FC } from 'react';

export const TradingInfo: FC = () => {
  return (
    <div className="px-6 uppercase">
      <div className="text-sm font-semibold opacity-50">Trading capital</div>
      <div className="flex items-center justify-between">
        <div className="text-[42px] leading-none uppercase">
          {botData.trading_capital} {botData.trading_capital_currency}
        </div>
        <div className="text-sm font-semibold">
          <div className="mb-1 flex items-center justify-between">
            <span className="mr-4 opacity-50">Balance: </span>
            <span className="mr-2">{botData.balance}</span>
            <HCoinIcon className="opacity-30" />
          </div>
          <div className="flex items-center justify-between">
            <span className="mr-4 opacity-50">On hold: </span>
            <span className="mr-2">{botData.balance}</span>
            <HCoinIcon className="opacity-30" />
          </div>
        </div>
      </div>
    </div>
  );
};
