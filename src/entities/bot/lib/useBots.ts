import { create } from 'zustand';
import { persist } from 'zustand/middleware';
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
  currentBot: 'blue_bot',
};

export const useBots = create<BotsStore>()(
  persist(
    set => ({
      ...initialState,
      setCurrentTimeRange: timeRange => () =>
        set(prev => ({ ...prev, currentTimeRange: timeRange })),
      setCurrentBot: bot => () => set(prev => ({ ...prev, currentBot: bot })),
    }),
    { name: 'bots_store' }
  )
);
