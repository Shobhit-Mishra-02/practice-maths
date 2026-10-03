import { create } from "zustand";

type State = {
  rightAttemptCount: number;
  wrongAttemptCount: number;
  resultTable: {
    headers: {
      id: string;
      label: string;
      key: string;
    }[];
    rows: Record<string, string | number>[];
  };
};

type Action = {
  incrementRightAttempt: () => void;
  incrementWrongAttempt: () => void;
  setResultHeader: (
    headers: {
      id: string;
      label: string;
      key: string;
    }[],
  ) => void;
  addResult: (row: Record<string, string | number>) => void;
  reset: () => void,
};

export const useResultStore = create<State & Action>()((set) => ({
  rightAttemptCount: 0,
  wrongAttemptCount: 0,
  resultTable: {
    headers: [],
    rows: [],
  },
  incrementRightAttempt: () =>
    set((state) => ({
      rightAttemptCount: state.rightAttemptCount + 1,
    })),
  incrementWrongAttempt: () =>
    set((state) => ({
      wrongAttemptCount: state.wrongAttemptCount + 1,
    })),
  setResultHeader: (
    headers: {
      id: string;
      label: string;
      key: string;
    }[],
  ) =>
    set((state) => ({
      resultTable: {
        ...state.resultTable,
        headers: headers,
      },
    })),
  addResult: (row: Record<string, string | number>) =>
    set((state) => ({
      resultTable: {
        ...state.resultTable,
        rows: [...state.resultTable.rows, row],
      },
    })),

  reset: () =>
    set(() => ({
      rightAttemptCount: 0,
      wrongAttemptCount: 0,
      resultTable: {
        headers: [],
        rows: [],
      },
    })),
}));
