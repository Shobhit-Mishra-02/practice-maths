import { useState } from "react";
import { AnswerStates } from "../../../constants";
import type { ConfigInterface } from "../../../types";
import { getRandomNumber } from "../../../utils";
import { Button, InputBox } from "../../common";
import EditConfiguration from "../../practice-configs/EditConfiguration";
import HeadingWrapper from "./HeadingWrapper";
import Result from "./Result";

const configs: ConfigInterface[] = [
  {
    id: "number_of_ques",
    name: "numberOfQues",
    type: "number",
    label: "Number of questions",
    defaultValue: "10",
  },
  {
    id: "from_limit",
    name: "fromLimit",
    type: "number",
    label: "Numbers starting from",
    hint: "Used to configure the starting range of numers, like starting from 10, 100, etc..",
    defaultValue: 10,
  },
  {
    id: "to_limit",
    name: "toLimit",
    type: "number",
    label: "Numbers ending to",
    hint: "Used to configure the ending range of numers",
    defaultValue: 100,
  },
];

const SquareOfNumber = () => {
  const [num] = useState<number>(getRandomNumber(100));
  const [ans, setAns] = useState<number>(0);
  const [ansState, setAnsState] = useState(AnswerStates.PENDING);

  const handleSubmit = () => {
    if (ans === num * num) {
      setAnsState(AnswerStates.CORRECT);
    } else {
      setAnsState(AnswerStates.WRONG);
    }
  };

  return (
    <HeadingWrapper heading="Finding Square of two digits">
      <EditConfiguration configs={configs}>
        <div className="flex flex-col gap-2 max-w-[300px] m-auto">
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
      </EditConfiguration>
    </HeadingWrapper>
  );
};

export default SquareOfNumber;
