const Option = ({
  name,
  onClick,
  ...rest
}: {
  name: string;
  onClick: () => void;
}) => {
  return <button onClick={onClick} {...rest}>{name}</button>;
};

export default Option;