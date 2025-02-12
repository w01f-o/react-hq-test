import { create } from 'zustand';
import { AvailableTimeRange } from '../model';

interface BotsState {
  currentTimeRange: AvailableTimeRange;
}

interface BotsActions {
  setCurrentTimeRange: (
    timeRange: '24h' | '7d' | '30d' | 'all_time'
  ) => () => void;
}

type BotsStore = BotsState & BotsActions;

const initialState: BotsState = {
  currentTimeRange: 'all_time',
};

export const useBots = create<BotsStore>(set => ({
  ...initialState,
  setCurrentTimeRange: timeRange => () => set({ currentTimeRange: timeRange }),
}));
