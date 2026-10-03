import { isEmpty } from "lodash";
import type { AnswerStateType } from "../../types";

const Result = ({
  answerState,
  extraText,
}: {
  answerState: AnswerStateType;
  extraText?: string;
}) => {
  switch (answerState) {
    case "CORRECT":
      return (
        <span>Correct answer{!isEmpty(extraText) && `, ${extraText}`}</span>
      );

    case "WRONG":
      return <span>Wrong answer{!isEmpty(extraText) && `, ${extraText}`}</span>;

    default:
      return null;
  }
};

export default Result;
