import { Button } from "../common";

const Option = ({
  name,
  onClick,
  ...rest
}: {
  name: string;
  onClick: () => void;
}) => {
  return (
    <Button label={name} onClick={onClick} {...rest} />
  );
};

export default Option;
