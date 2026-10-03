import { useEffect, useState } from "react";
import { ANSWER_STATES, RESULT_TABLE_HEADER } from "../../../constants";
import { useConfigStore, useMenuStore, useResultStore } from "../../../store";
import {
  randomNumberWithLimits,
  getResultRowForSqrtOfNo as getRow,
} from "../../../utils";
import {
  FinalResultWindow,
  HeaderWithBackBtnWrapper,
  Tracker,
} from "../../common";

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
    setNum(() => getNumber());
    setAns(() => 0);
    setAnsState(ANSWER_STATES.PENDING);
  };

  const handleSubmit = (next: (cb?: () => void) => void) => {
    if (ans === num * num) {
      addResult(
        getRow({
          question: `${num} X ${num} = ?`,
          answer: ans,
          expected: num * num,
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
      heading="Finding Square of two digits"
    >
      <Tracker
        questionText={`${num} X ${num} = ?`}
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

export default SquareOfNumber;
