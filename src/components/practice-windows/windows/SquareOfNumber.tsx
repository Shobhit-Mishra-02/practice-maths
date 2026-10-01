import { useState } from "react";
import { AnswerStates } from "../../../constants";
import { useConfigStore, useMenuStore } from "../../../store";
import { randomNumberWithLimits } from "../../../utils";
import {
  Button,
  HeaderWithBackBtnWrapper,
  InputBox,
  Table,
} from "../../common";
import Result from "./Result";

const SquareOfNumber = () => {
  const config = useConfigStore((state) => state.config);
  const {
    numberOfQues = 0,
    fromLimit,
    toLimit,
  } = config as { numberOfQues: string; fromLimit: string; toLimit: string };

  const onBack = useMenuStore((state) => state.reset);
  const getNumber = () =>
    randomNumberWithLimits(parseInt(fromLimit), parseInt(toLimit));
  const [num, setNum] = useState<number>(getNumber());
  const [ans, setAns] = useState<number>(0);
  const [ansState, setAnsState] = useState(AnswerStates.PENDING);

  const [result, setResult] = useState(
    [] as {
      id: number;
      question: string;
      answer: number;
      expected: number;
    }[],
  );
  const [wrongAttempts, setWrongAttemps] = useState(0);
  const [rightAttemps, setRightAttemps] = useState(0);

  const [tracker, setTracker] = useState(0);

  const refreshQuestion = () => {
    setNum(() => getNumber());
    setAns(() => 0);
    setAnsState(AnswerStates.PENDING);
  };

  const next = () => {
    if (tracker < +numberOfQues) {
      setTracker((prev) => prev + 1);
      refreshQuestion();
    }
  };

  const handleSubmit = () => {
    if (ans === num * num) {
      setResult((res) => [
        ...res,
        {
          id: Date.now(),
          question: `${num} X ${num} = ?`,
          answer: ans,
          expected: num * num,
        },
      ]);
      setAnsState(AnswerStates.CORRECT);
      setRightAttemps((prev) => prev + 1);
      next();
    } else {
      setWrongAttemps((prev) => prev + 1);
      setAnsState(AnswerStates.WRONG);
    }
  };

  if (tracker === +numberOfQues) {
    const headings = [
      {
        label: "Question",
        key: "question",
      },
      {
        label: "Answer",
        key: "answer",
      },
      {
        label: "Expected Answer",
        key: "expected",
      },
    ];
    return (
      <HeaderWithBackBtnWrapper
        backLabel="Home"
        heading="Finding Square of two digits"
        onBack={onBack}
      >
        <div className="m-auto w-fit">
          <div className="flex flex-col gap-1 text-left mb-2 text-gray-800">
            <span>Total number of questions attempted: {numberOfQues}</span>
            <span>Total number of correct attempts: {rightAttemps}</span>
            <span>Total number of wrong attempts: {wrongAttempts}</span>
          </div>
          <Table headings={headings} enableSerialNo={true} tableData={result} />
        </div>
      </HeaderWithBackBtnWrapper>
    );
  }

  return (
    <HeaderWithBackBtnWrapper
      backLabel="Home"
      onBack={onBack}
      heading="Finding Square of two digits"
    >
      <div className="flex flex-col gap-2 max-w-[300px] m-auto">
        <div className="flex flex-row justify-end">
          <span>{`Progress ${tracker + 1}/${numberOfQues}`}</span>
        </div>
        <span className="text-xl mt-2 mb-1">{`${num} X ${num} = ?`}</span>
        <InputBox
          type="number"
          value={ans}
          onChange={(
            e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
          ) => setAns(parseInt(e.target.value))}
        />
        <Button onClick={handleSubmit} label="Submit" />
        <Result answerState={ansState} />
      </div>
    </HeaderWithBackBtnWrapper>
  );
};

export default SquareOfNumber;
