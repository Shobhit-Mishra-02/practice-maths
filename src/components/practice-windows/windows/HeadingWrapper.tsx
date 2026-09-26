import type React from "react";
import { useMenuStore } from "../../../store";

const HeadingWrapper = ({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) => {
  const onBack = useMenuStore((state) => state.reset);
  return (
    <div>
      <div>
        <button onClick={() => onBack()}>back</button>
      </div>
      <h4>{heading}</h4>
      <div>{children}</div>
    </div>
  );
};

export default HeadingWrapper;
