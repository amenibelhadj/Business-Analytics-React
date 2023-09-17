import React from "react";

import { Input } from "components";

export default {
  title: "business_analytics/Input",
  component: Input,
};

export const SampleInput = (args) => <Input {...args} />;
SampleInput.args = {
  shape: "round",
  color: "white_A700",
  size: "md",
  variant: "fill",
  wrapClassName: "w-[300px]",
  className: "w-full",
  placeholder: "placeholder",
};
