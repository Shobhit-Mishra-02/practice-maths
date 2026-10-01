import type { AnswerStateType } from "../types";

export const MENU_OPTION_TYPES = {
    SQUARE_OF_NUMBER: 'SQUARE_OF_NUMBER',
}

export const MENU_OPTIONS: {
  id: string,
  name: string;
  description?: string;
}[] = [
  {
    id: MENU_OPTION_TYPES.SQUARE_OF_NUMBER,
    name: "Finding Square of number",
  },
];

export const AnswerStates: Record<string, AnswerStateType> = {
  CORRECT: "CORRECT",
  WRONG: "WRONG",
  PENDING: "PENDING",
}
