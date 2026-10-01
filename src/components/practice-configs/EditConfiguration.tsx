import { isEmpty } from "lodash";
import React, { useState } from "react";
import { useConfigStore, useMenuStore } from "../../store";
import type { ConfigInterface } from "../../types";
import { createConfigFormSubmitPayload as createFinalResult } from "../../utils";
import {
  Button,
  HeaderWithBackBtnWrapper
} from "../common";
import InputFactory from "./InputFactory";

const EditConfiguration = ({
  configs,
  children,
}: {
  configs: ConfigInterface[];
  children: React.ReactNode;
}) => {
  const [validatedConfig, setConfigValidation] = useState(false);
  const setConfig = useConfigStore((state) => state.setConfigs);
  const onBack = useMenuStore((state) => state.reset);

  if (isEmpty(configs)) return null;

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries()) as Record<string, string>;
    const result = createFinalResult(data, configs);
    setConfig(result as { key: string; value: string | number }[]);
    setConfigValidation(true);
  };

  if (validatedConfig) {
    return children;
  }

  const extraParams = {
    type: "submit",
  };

  return (
    <HeaderWithBackBtnWrapper
      heading="Practice configuration"
      onBack={() => onBack()}
      backLabel="Home"
    >
      <form
        className="flex flex-col gap-1 mt-4 max-w-[300px] m-auto"
        onSubmit={handleSubmit}
      >
        {configs.map((cnf) => (
          <InputFactory key={cnf.id} {...cnf} />
        ))}
        <div className="mt-4">
          <Button label="Configure" {...extraParams} />
        </div>
      </form>
    </HeaderWithBackBtnWrapper>
  );
};

export default EditConfiguration;
