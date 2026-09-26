import { SquareOfThreeDigits, SquareOfTwoDigits } from "./windows";
import { MENU_OPTION_TYPES } from "../../constants";

const PracticeFactory = ({ optionId }: { optionId: string }) => {
  switch (optionId) {
    case MENU_OPTION_TYPES.SQUARE_OF_TWO_DIGITS:
      return <SquareOfTwoDigits />;

    case MENU_OPTION_TYPES.SQUARE_OF_THREE_DIGITS:
      return <SquareOfThreeDigits />;

    default:
      break;
  }
};

export default PracticeFactory;
