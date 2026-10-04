import { create } from "zustand";

type State = {
  time: number; // in secs
  play: boolean;
};

type Action = {
  reset: () => void;
  tick: () => void;
  start: () => void;
  stop: () => void;
  restart: () => void;
};

export const useStopWatch = create<State & Action>()((set) => ({
  time: 0,
  play: false,
  reset: () =>
    set(() => ({
      time: 0,
    })),
  tick: () =>
    set((state) => ({
      time: state.time + 1,
    })),
  start: () =>
    set(() => ({
      play: true,
    })),
  stop: () =>
    set(() => ({
      play: false,
    })),
  restart: () =>
    set(() => ({
      play: true,
      time: 0,
    })),
}));
