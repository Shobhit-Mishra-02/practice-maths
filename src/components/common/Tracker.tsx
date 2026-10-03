import InputBox from "./InputBox";
import Button from "./Button";
import Result from "./Result";
import { useState } from "react";
import type { AnswerStateType } from "../../types";

const Tracker = ({
  questionText,
  ans,
  setAns,
  ansState,
  handleSubmit,
  numberOfQues,
  finalSummaryComp,
}: {
  questionText: string;
  ans: number | string;
  setAns: (val: number | string) => void;
  ansState: AnswerStateType;
  handleSubmit: (cb: () => void) => void;
  numberOfQues: number;
  finalSummaryComp: React.ReactNode;
}) => {
  const [tracker, setTracker] = useState(0);

  const next = (cb?: () => void) => {
    setTracker((prev) => prev + 1);
    if (cb && typeof cb === "function") cb();
  };

  if (tracker === numberOfQues) {
    return finalSummaryComp;
  }

  return (
    <div className="flex flex-col gap-2 max-w-[300px] m-auto">
      <div className="flex flex-row justify-end">
        <span>{`Progress ${tracker + 1}/${numberOfQues}`}</span>
      </div>
      <span className="text-xl mt-2 mb-1">{questionText}</span>
      <InputBox
        type="number"
        value={ans}
        onChange={(e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) =>
          setAns(parseInt(e.target.value))
        }
      />
      <Button
        onClick={() => {
          handleSubmit(next);
        }}
        label="Submit"
      />
      <Result answerState={ansState} />
    </div>
  );
};

export default Tracker;
