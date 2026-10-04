import type { AnswerStateType } from "../types";

export * from "./configs";
export const MENU_OPTION_TYPES = {
  SQUARE_OF_NUMBER: "SQUARE_OF_NUMBER",
  MULTIPLICATION_OF_NUMBERS: "MULTIPLICATION_OF_NUMBERS",
  ADDITION_OF_NUMBERS: "ADDITION_OF_NUMBERS",
  SUBTRACTION_OF_NUMBERS: "SUBTRACTION_OF_NUMBERS",
  DIVISION_OF_NUMBERS: "DIVISION_OF_NUMBERS",
};

export const MENU_OPTIONS: {
  id: string;
  name: string;
  description?: string;
}[] = [
  {
    id: MENU_OPTION_TYPES.MULTIPLICATION_OF_NUMBERS,
    name: "Finding Muliplication of numbers",
  },
  {
    id: MENU_OPTION_TYPES.ADDITION_OF_NUMBERS,
    name: "Finding Addition of numbers",
  },
  {
    id: MENU_OPTION_TYPES.SUBTRACTION_OF_NUMBERS,
    name: "Finding Subtraction of numbers",
  },
  {
    id: MENU_OPTION_TYPES.DIVISION_OF_NUMBERS,
    name: "Finding Division of numbers",
  },
  {
    id: MENU_OPTION_TYPES.SQUARE_OF_NUMBER,
    name: "Finding Square of number",
  },
];

export const ANSWER_STATES: Record<string, AnswerStateType> = {
  CORRECT: "CORRECT",
  WRONG: "WRONG",
  PENDING: "PENDING",
};

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
