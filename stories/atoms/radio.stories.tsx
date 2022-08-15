import React from "react";
import { ComponentMeta, Story } from "@storybook/react";
import { Radio, RadioProps } from "../../src/components/atoms/radio";

export default {
  title: "Design System/Atoms/Radio",
  component: Radio,
} as ComponentMeta<typeof Radio>;

const Template: Story<RadioProps> = (props) => <Radio {...props} />;

export const Enabled = Template.bind({});
export const Disabled = Template.bind({});
Disabled.args = { disabled: true };
