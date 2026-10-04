import { useConfigStore, useResultStore, useStopWatch } from "../../store";
import Table from "./Table";
import { getFormattedTime } from "../../utils";

const FinalResultWindow = () => {
  const config = useConfigStore((state) => state.config);
  const { numberOfQues = 0 } = config as { numberOfQues: string };
  const rightCount = useResultStore((state) => state.rightAttemptCount);
  const wrongCount = useResultStore((state) => state.wrongAttemptCount);
  const headings = useResultStore((state) => state.resultTable.headers);
  const rows = useResultStore((state) => state.resultTable.rows);
  const { time: totalTimeTaken } = useStopWatch(
    (state) => state,
  );

  return (
    <div className="m-auto w-fit">
      <div className="flex flex-col gap-1 text-left mb-2 text-gray-800">
        <span>Total time taken: {getFormattedTime(totalTimeTaken)}</span>
        <span>Total number of questions attempted: {numberOfQues}</span>
        <span>Total number of correct attempts: {rightCount}</span>
        <span>Total number of wrong attempts: {wrongCount}</span>
      </div>
      <Table headings={headings} enableSerialNo={true} tableData={rows} />
    </div>
  );
};

export default FinalResultWindow;
