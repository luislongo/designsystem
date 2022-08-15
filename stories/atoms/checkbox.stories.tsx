import React from "react";
import { ComponentMeta, Story } from "@storybook/react";
import { Checkbox, CheckboxProps } from "../../src/components/atoms/checkbox";

export default {
  title: "Design System/Atoms/Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: Story<CheckboxProps> = (props) => <Checkbox {...props} />;

export const Enabled = Template.bind({});
export const Disabled = Template.bind({});
Disabled.args = { disabled: true };
