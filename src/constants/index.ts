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

export const ANSWER_STATES: Record<string, AnswerStateType> = {
  CORRECT: "CORRECT",
  WRONG: "WRONG",
  PENDING: "PENDING",
}

export const RESULT_TABLE_HEADER = [
  {
    id: "ques",
    label: "Question",
    key: "question",
  },
  {
    id: "ans",
    label: "Answer",
    key: "answer",
  },
  {
    id: "expt",
    label: "Expected Answer",
    key: "expected",
  },
];