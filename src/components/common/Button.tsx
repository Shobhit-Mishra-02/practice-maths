const Button = ({
  label,
  onClick,
  varient,
  ...rest
}: {
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  varient?: "primary" | "secondary" | "tirnary";
}) => {
  switch (varient) {
    case "primary":
      return (
        <button
          className="bg-blue-600 rounded-md pt-1 pb-1 pl-3 pr-3 text-white cursor-pointer w-fit hover:bg-blue-700"
          onClick={(e) => onClick && onClick(e)}
          {...rest}
        >
          {label}
        </button>
      );

    case "secondary":
      return (
        <button
          className="bg-gray-600 rounded-md pt-1 pb-1 pl-3 pr-3 text-gray-950 cursor-pointer w-fit hover:bg-gray-700"
          onClick={(e) => onClick && onClick(e)}
          {...rest}
        >
          {label}
        </button>
      );

    case "tirnary":
      return (
        <button
          className="bg-gray-50 rounded-md pt-1 pb-1 pl-3 pr-3 text-gray-950 cursor-pointer w-fit hover:bg-gray-100 border border-gray-300"
          onClick={(e) => onClick && onClick(e)}
          {...rest}
        >
          {label}
        </button>
      );

    default:
      return (
        <button
          className="bg-blue-600 rounded-md pt-1 pb-1 pl-3 pr-3 text-white cursor-pointer w-fit hover:bg-blue-700"
          onClick={(e) => onClick && onClick(e)}
          {...rest}
        >
          {label}
        </button>
      );
      break;
  }
};

export default Button;
