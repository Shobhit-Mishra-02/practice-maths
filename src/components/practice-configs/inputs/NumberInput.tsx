import { isEmpty } from "lodash";
import { InputBox } from "../../common";

const NumberInput = ({ ...args }) => {
  const {
    label,
    name,
    hint = "",
  } = args;

  return (
    <>
      <label className="text-md text-gray-800 mt-1" htmlFor={name}>{label}</label>
      {
        !isEmpty(hint) && <span className="text-xs text-gray-600">hint: {hint}</span>
      }
      <InputBox
        name={name}
        className="border rounded-md border-blue-400 bg-white text-gray-700 p-1"
        type="number"
        {...args}
      />
    </>
  );
};

export default NumberInput;
