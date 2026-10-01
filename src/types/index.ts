export interface ConfigInterface {
  id: string;
  type: "number" | "string" | "single-select" | "multi-select";
  name: string;
  defaultValue?: string | number;
  options?: { id: string; label: string; value: string }[];

  label: string,
  hint?: string,
  placeholder?: string,
};

export interface AnsweredConfigInterface extends ConfigInterface {
  answer: {
    [k: string]: string | number | undefined
  };
}

export type InputOptionType = {
  id: string;
  label: string;
  value: string;
  selected?: boolean;
};

export type AnswerStateType = "CORRECT" | "WRONG" | "PENDING";