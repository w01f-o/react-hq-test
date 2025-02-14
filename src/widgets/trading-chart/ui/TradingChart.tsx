import { botData } from '@/entities/bot';
import { useBots } from '@/entities/bot/lib/useBots';
import { Profitability } from '@/shared/ui/profitability';
import { FC, useEffect, useState } from 'react';
import {
  Area,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
} from 'recharts';
import './custom-legend.css';

const legend = ['22.04', '23.04', '24.04', '25.04', '26.04'];

export const TradingChart: FC = () => {
  const currentBot = useBots(state => state.currentBot);
  const [chartValue, setChartValue] = useState<{ value: number }[]>(
    Array.from({ length: 30 }, (_, i) => ({ value: i }))
  );

  useEffect(() => {
    setChartValue(prev =>
      prev.map(() => ({
        value: Math.floor(Math.random() * 85),
      }))
    );
  }, [currentBot]);

  return (
    <div className="relative flex flex-grow items-center overflow-hidden py-2">
      <ResponsiveContainer className="chart-container scale-110">
        <ComposedChart data={chartValue}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="rgba(31, 76, 128, 0.5)"
          />
          <Legend
            payload={legend.map(d => ({ name: d, value: d }))}
            iconSize={0}
            wrapperStyle={{
              fontSize: 12,
              opacity: 0.5,
            }}
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
            stroke={'#2175cd'}
            dot={false}
            strokeWidth={2}
          />
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={'#1f4e83'} stopOpacity={1} />
              <stop offset="100%" stopColor={'#1f4e83'} stopOpacity={0} />
            </linearGradient>
          </defs>
        </ComposedChart>
      </ResponsiveContainer>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl font-semibold min-[410px]:text-4xl">
        <Profitability
          bot={botData.bots.find(bot => bot.name === currentBot)!}
        />
      </div>
    </div>
  );
};
