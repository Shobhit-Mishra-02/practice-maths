import type { ConfigInterface } from "../types";

export const getRandomNumber = (n: number) => Math.floor(Math.random() * n);

export function randomNumberWithLimits(from: number, to: number) {
  return Math.floor(Math.random() * (to - from + 1)) + from;
}

export const createConfigFormSubmitPayload = (
  submittedFormDetails: Record<string, string>,
  configs: ConfigInterface[],
) => {
  const getAnswer = (cnf: ConfigInterface) => {
    if (Object.keys(submittedFormDetails).includes(cnf.name)) {
      return submittedFormDetails[cnf.name];
    }

    if (cnf.defaultValue) {
      return cnf.defaultValue;
    }

    return undefined;
  };

  return configs
    .map((cnf) => ({
      key: cnf.name,
      value: getAnswer(cnf),
    }))
    .filter((cnf) => cnf.value !== undefined);
};

export const waitFor = (time: number) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(true), time);
  });
};
