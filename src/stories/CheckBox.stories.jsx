import React from "react";
import { CheckBox } from "components";

export default {
  title: "business_analytics/CheckBox",
  component: CheckBox,
};

export const SampleCheckbox = (args) => <CheckBox {...args} />;

SampleCheckbox.args = {
  shape: "round",
  color: "bluegray_600",
  variant: "outline",
  label: "Checkbox",
  inputClassName: "mr-1",
};
