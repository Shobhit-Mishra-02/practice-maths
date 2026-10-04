import { useEffect, useRef } from "react";
import { useStopWatch } from "../../store";
import { getFormattedTime } from "../../utils";

const StopWatch = () => {
  const { play, time, tick } = useStopWatch((state) => state);
  const refId = useRef<null | number>(null);

  useEffect(() => {
    if (play === true && refId.current === null) {
      refId.current = setInterval(() => tick(), 1000);
    }

    if (play === false && refId.current !== null) {
      clearInterval(refId.current);
      refId.current = null;
    }

    return () => {
        if (refId.current !== null) {
            clearInterval(refId.current);
            refId.current = null;
        }
    }
  }, [play]);

  return <span>Time: {getFormattedTime(time)}</span>;
};

export default StopWatch;
