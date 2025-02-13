import { AvailableTimeRange } from '@/entities/bot';
import { useBots } from '@/entities/bot/lib/useBots';
import { ButtonGroup, ButtonGroupItem } from '@/shared/ui';
import { FC } from 'react';

// const timeRanges = Object.keys(botData.bots[0]).filter(
//   key => key !== 'name' && key !== 'cost'
// );
const timeRanges: AvailableTimeRange[] = ['24h', '7d', '30d', 'all_time'];

const timeRangeNames: Record<string, string> = {
  all_time: 'All Time',
};

export const TimeRange: FC = () => {
  const currentTimeRange = useBots(state => state.currentTimeRange);
  const setCurrentTimeRange = useBots(state => state.setCurrentTimeRange);

  return (
    <div className="mb-4 flex items-center justify-center gap-3 whitespace-nowrap">
      Time Range:
      <ButtonGroup>
        {timeRanges.map(timeFrame => (
          <ButtonGroupItem
            key={timeFrame}
            isActive={timeFrame === currentTimeRange}
            onClick={setCurrentTimeRange(timeFrame)}
          >
            {timeRangeNames[timeFrame] ?? timeFrame}
          </ButtonGroupItem>
        ))}
      </ButtonGroup>
    </div>
  );
};
