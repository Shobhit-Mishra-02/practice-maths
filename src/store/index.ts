import { create } from "zustand";

type State = {
  selectedOption: string | null;
};

type Action = {
  setOption: (option: string) => void;
  reset: () => void;
};

export const useMenuStore = create<State & Action>()((set) => ({
  selectedOption: null,
  setOption: (opt) => set(() => ({ selectedOption: opt })),
  reset: () => set(() => ({ selectedOption: null })),
}));