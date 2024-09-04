import { create } from 'zustand';

interface TimeState {
  time: string;
  setTime: (time: string) => void;
  getTime: () => string;
}

export const useTimeStore = create<TimeState>((set, get) => ({
  time: '00:00:00',
  setTime: (time: string) => set({ time }),
  getTime: () => get().time,
}));
