import { SquareOfNumber } from "./windows";
import { MENU_OPTION_TYPES } from "../../constants";

const PracticeFactory = ({ optionId }: { optionId: string }) => {
  switch (optionId) {
    case MENU_OPTION_TYPES.SQUARE_OF_NUMBER:
      return <SquareOfNumber />;

    default:
      return <div>No window found !!</div>;
      break;
  }
};

export default PracticeFactory;
