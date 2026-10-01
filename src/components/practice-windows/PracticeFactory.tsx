import { SquareOfNumber } from "./windows";
import { MENU_OPTION_TYPES } from "../../constants";
import EditConfiguration from "../practice-configs/EditConfiguration";
import type { ConfigInterface } from "../../types";

const configSqrOfNumber: ConfigInterface[] = [
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

const PracticeFactory = ({ optionId }: { optionId: string }) => {
  switch (optionId) {
    case MENU_OPTION_TYPES.SQUARE_OF_NUMBER:
      return (
        <EditConfiguration configs={configSqrOfNumber}>
          <SquareOfNumber />
        </EditConfiguration>
      );

    default:
      return <div>No window found !!</div>;
      break;
  }
};

export default PracticeFactory;
