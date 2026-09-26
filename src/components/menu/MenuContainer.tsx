import { MENU_OPTIONS } from "../../constants";
import Option from "./Option";

const MenuContainer = ({
  heading,
  options,
  handleOptionSelect,
}: {
  heading: string;
  options: typeof MENU_OPTIONS;
  handleOptionSelect: (opt: string) => void;
}) => {
  return (
    <div>
      <h4>{heading}</h4>
      {options.map((option) => (
        <Option
          key={option.id}
          name={option.name}
          onClick={() => handleOptionSelect(option.id)}
        />
      ))}
    </div>
  );
};

export default MenuContainer;
