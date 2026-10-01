import { create } from "zustand";

type State = {
  config: Record<string, string | number>;
};

type Action = {
  setConfig: (key: string, value: string | number) => void;
  setConfigs: (cnfs: { key: string; value: string | number }[]) => void;
};

export const useConfigStore = create<State & Action>()((set) => ({
  config: {},
  setConfig: (key: string, value: string | number) =>
    set((state) => ({
      ...state.config,
      [key]: value,
    })),
  setConfigs: (cnfs: { key: string; value: string | number }[]) =>
    set((state) => ({
      ...state.config,
      ...cnfs.reduce((acc, curr) => ({ ...acc, ...curr }), {}),
    })),
  reset: () => set(() => ({})),
}));
