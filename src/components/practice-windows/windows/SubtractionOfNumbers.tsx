import { useEffect, useState } from "react";
import { useConfigStore, useMenuStore, useResultStore } from "../../../store";
import {
  randomNumberWithLimits as getNum,
  getResultRow as getRow,
} from "../../../utils";
import { ANSWER_STATES, RESULT_TABLE_HEADER } from "../../../constants";
import {
  FinalResultWindow,
  HeaderWithBackBtnWrapper,
  Tracker,
} from "../../common";

const SubtractionOfNumbers = () => {
  const config = useConfigStore((state) => state.config);
  const {
    numberOfQues,
    fromLimitOfFirstNum: fromNum1,
    toLimitOfFirstNum: toNum1,
    fromLimitOfSecondNum: fromNum2,
    toLimitOfSecondNum: toNum2,
  } = config as {
    numberOfQues: string;
    fromLimitOfFirstNum: string;
    toLimitOfFirstNum: string;
    fromLimitOfSecondNum: string;
    toLimitOfSecondNum: string;
  };

  const getNumbers = () => {
    const firstNum = getNum(+fromNum1, +toNum1);
    const secondNum = getNum(+fromNum2, +toNum2);

    return {
      num1: Math.max(firstNum, secondNum),
      num2: Math.min(firstNum, secondNum),
    };
  };

  const onBack = useMenuStore((state) => state.reset);
  const [nums, setNums] = useState(getNumbers());
  const [ans, setAns] = useState<number>(0);
  const [ansState, setAnsState] = useState(ANSWER_STATES.PENDING);

  const addResult = useResultStore((state) => state.addResult);
  const incRightCount = useResultStore((state) => state.incrementRightAttempt);
  const incWrongCount = useResultStore((state) => state.incrementWrongAttempt);
  const setHeaders = useResultStore((state) => state.setResultHeader);
  const resetResult = useResultStore((state) => state.reset);

  useEffect(() => {
    resetResult();
    setHeaders(RESULT_TABLE_HEADER);
  }, []);

  const refreshQuestion = () => {
    setNums(getNumbers());
    setAns(() => 0);
    setAnsState(ANSWER_STATES.PENDING);
  };

  const handleSubmit = (next: (cb?: () => void) => void) => {
    if (ans === nums.num1 - nums.num2) {
      addResult(
        getRow({
          question: `${nums.num1} - ${nums.num2} = ?`,
          answer: ans,
          expected: nums.num1 - nums.num2,
        }),
      );
      setAnsState(ANSWER_STATES.CORRECT);
      incRightCount();
      next(() => refreshQuestion());
    } else {
      incWrongCount();
      setAnsState(ANSWER_STATES.WRONG);
    }
  };

  return (
    <HeaderWithBackBtnWrapper
      backLabel="Home"
      onBack={onBack}
      heading="Finding Difference of two digits"
    >
      <Tracker
        questionText={`${nums.num1} - ${nums.num2} = ?`}
        ans={ans}
        setAns={setAns as (val: string | number) => void}
        ansState={ansState}
        handleSubmit={handleSubmit}
        numberOfQues={+numberOfQues}
        finalSummaryComp={<FinalResultWindow />}
      />
    </HeaderWithBackBtnWrapper>
  );
};

export default SubtractionOfNumbers;
