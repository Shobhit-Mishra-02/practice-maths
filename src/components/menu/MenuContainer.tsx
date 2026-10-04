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
  const commonOptions = {
    style: {
      width: "300px",
    },
  };
  return (
    <div>
      <h4 className="font-bold text-center mt-2 text-gray-700">{heading}</h4>
      <div className="flex flex-col gap-2 justify-center items-center mt-2">
        {options.map((option) => (
          <Option
            key={option.id}
            name={option.name}
            onClick={() => handleOptionSelect(option.id)}
            {...commonOptions}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuContainer;
