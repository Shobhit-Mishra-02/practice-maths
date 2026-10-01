import type React from "react";
import { useMenuStore } from "../../../store";
import { Heading, Button } from "../../common";

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
        <Button onClick={() => onBack()} label="Back" varient="tirnary" />
      </div>
      <Heading>{heading}</Heading>
      <div>{children}</div>
    </div>
  );
};

export default HeadingWrapper;
