import { useState } from "react";
import { getRandomNumber } from "../../../utils";
import HeadingWrapper from "./HeadingWrapper";

const SquareOfTwoDigits = () => {
  const [num,] = useState<number>(getRandomNumber(100));
  const [ans, setAns] = useState<number>(0);
  const [result, setResult] = useState("");

  const handleSubmit = () => {
    if (ans === num * num) {
      setResult("PASS");
    } else {
      setResult("FAIL");
    }
  };

  return (
    <HeadingWrapper heading="Finding Square of two digits">
      <div>
        {`${num} X ${num} = ?`}
        <input
          type="number"
          value={ans}
          onChange={(e) => setAns(parseInt(e.target.value))}
        />
        <button onClick={handleSubmit}>Submit</button>
        <span>Result: {result}</span>
      </div>
    </HeadingWrapper>
  );
};

export default SquareOfTwoDigits;
