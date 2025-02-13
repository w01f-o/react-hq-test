import { botData } from '@/entities/bot';
import { useBots } from '@/entities/bot/lib/useBots';
import { botColors } from '@/shared/config';
import { Profitability } from '@/shared/ui/profitability';
import { FC } from 'react';
import {
  Area,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
} from 'recharts';

const legend = ['22.04', '23.04', '24.04', '25.04', '26.04'];
const data = [
  { value: 60 },
  { value: 60 },
  { value: 57 },
  { value: 58 },
  { value: 37 },
  { value: 39 },
  { value: 37 },
  { value: 55 },
  { value: 60 },
  { value: 50 },
  { value: 45 },
  { value: 40 },
  { value: 43 },
  { value: 42 },
  { value: 50 },
  { value: 58 },
  { value: 60 },
  { value: 55 },
  { value: 58 },
  { value: 40 },
  { value: 39 },
  { value: 35 },
  { value: 58 },
  { value: 65 },
  { value: 55 },
  { value: 55 },
  { value: 55 },
  { value: 55 },
];

export const TradingChart: FC = () => {
  const currentBot = useBots(state => state.currentBot);

  return (
    <div
      className="relative flex flex-grow items-center overflow-hidden"
      style={{ width: '100%', height: '300px' }}
    >
      <ResponsiveContainer className="scale-110" width="100%" height="70%">
        <ComposedChart data={data}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="rgba(31, 76, 128, 0.5)"
          />
          <Legend
            payload={legend.map(d => ({ name: d, value: d }))}
            iconSize={0}
          />
          <Area
            type="monotone"
            dataKey="value"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#gradient)"
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke={botColors[currentBot]}
            dot={false}
            strokeWidth={2}
          />
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="0%"
                stopColor={botColors[currentBot]}
                stopOpacity={1}
              />
              <stop
                offset="100%"
                stopColor={botColors[currentBot]}
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
        </ComposedChart>
      </ResponsiveContainer>
      <div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-semibold">
        <Profitability
          bot={botData.bots.find(bot => bot.name === currentBot)!}
        />
      </div>
    </div>
  );
};
