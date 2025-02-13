import { FC } from 'react';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const data = [
  { date: '22.04', value: 40 },
  { date: '23.04', value: 60 },
  { date: '24.04', value: 30 },
  { date: '25.04', value: 70 },
  { date: '26.04', value: 50 },
];

export const TradingChart: FC = () => {
  return (
    <div
      className="flex flex-grow items-center overflow-hidden"
      style={{ width: '100%', height: '300px' }}
    >
      <ResponsiveContainer className="scale-110" width="100%" height="70%">
        <LineChart data={data}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="rgba(31, 76, 128, 0.5)"
          />
          <XAxis dataKey="date" hide />
          <YAxis hide />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#227ad6"
            fill="url(#gradient)"
            fillOpacity={0.4}
            dot={false}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(31, 76, 128, 1)" />
              <stop offset="100%" stopColor="rgba(31, 76, 128, 0)" />
            </linearGradient>
          </defs>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
