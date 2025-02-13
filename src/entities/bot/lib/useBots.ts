import { create } from 'zustand';
import { AvailableTimeRange } from '../model';

interface BotsState {
  currentTimeRange: AvailableTimeRange;
  currentBot: string;
}

interface BotsActions {
  setCurrentTimeRange: (timeRange: AvailableTimeRange) => () => void;
  setCurrentBot: (bot: string) => () => void;
}

type BotsStore = BotsState & BotsActions;

const initialState: BotsState = {
  currentTimeRange: 'all_time',
  currentBot: 'yellow_bot',
};

export const useBots = create<BotsStore>(set => ({
  ...initialState,
  setCurrentTimeRange: timeRange => () => set({ currentTimeRange: timeRange }),
  setCurrentBot: bot => () => set({ currentBot: bot }),
}));
