import { isEmpty } from "lodash";
import type { InputOptionType } from "../../../types";

const SingleSelectInput = ({
  options,
  ...args
}: {
  options: InputOptionType[];
}) => {
  if (isEmpty(options)) return null;

  return (
    <select {...args}>
      {options.map((opt) => (
        <option key={opt.id} value={opt.value} selected={opt.selected}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};

export default SingleSelectInput;
