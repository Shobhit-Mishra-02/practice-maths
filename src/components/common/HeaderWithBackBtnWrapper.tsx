import type React from "react";

import Heading from "./Heading";
import Button from "./Button";

const HeaderWithBackBtnWrapper = ({
  heading,
  children,
  onBack,
  backLabel,
}: {
  heading: string;
  children: React.ReactNode;
  onBack: () => void,
  backLabel: string,
}) => {
  return (
    <div>
      <div>
        <Button onClick={() => onBack()} label={backLabel} varient="tirnary" />
      </div>
      <Heading>{heading}</Heading>
      <div>{children}</div>
    </div>
  );
};

export default HeaderWithBackBtnWrapper;
