import {
  SquareOfNumber,
  MultiplicationOfNumbers,
  AdditionOfNumbers,
  SubtractionOfNumbers,
  DivisionOfNumbers,
} from "./windows";
import {
  MENU_OPTION_TYPES,
  SQUARE_OF_NUMBER_CONFIG,
  MULTIPLICATION_OF_NUMBERS_CONFIG,
  ADDITION_OF_NUMBERS_CONFIG,
  SUBTRACTION_OF_NUMBERS_CONFIG,
  DIVISION_OF_NUMBERS_CONFIG,
} from "../../constants";
import EditConfiguration from "../practice-configs/EditConfiguration";

const PracticeFactory = ({ optionId }: { optionId: string }) => {
  switch (optionId) {
    case MENU_OPTION_TYPES.SQUARE_OF_NUMBER:
      return (
        <EditConfiguration configs={SQUARE_OF_NUMBER_CONFIG}>
          <SquareOfNumber />
        </EditConfiguration>
      );

    case MENU_OPTION_TYPES.MULTIPLICATION_OF_NUMBERS:
      return (
        <EditConfiguration configs={MULTIPLICATION_OF_NUMBERS_CONFIG}>
          <MultiplicationOfNumbers />
        </EditConfiguration>
      );

    case MENU_OPTION_TYPES.ADDITION_OF_NUMBERS:
      return (
        <EditConfiguration configs={ADDITION_OF_NUMBERS_CONFIG}>
          <AdditionOfNumbers />
        </EditConfiguration>
      );

    case MENU_OPTION_TYPES.SUBTRACTION_OF_NUMBERS:
      return (
        <EditConfiguration configs={SUBTRACTION_OF_NUMBERS_CONFIG}>
          <SubtractionOfNumbers />
        </EditConfiguration>
      );

    case MENU_OPTION_TYPES.DIVISION_OF_NUMBERS:
      return (
        <EditConfiguration configs={DIVISION_OF_NUMBERS_CONFIG}>
          <DivisionOfNumbers />
        </EditConfiguration>
      );

    default:
      return <div>No window found !!</div>;
  }
};

export default PracticeFactory;
