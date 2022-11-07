import React from "react";
import { ComponentMeta, Story } from "@storybook/react";
import { BarSpinner, BarSpinnerProps } from "./barSpinner.component";

export default {
  title: "Spinners",
  component: BarSpinner,
} as ComponentMeta<typeof BarSpinner>;

const Template: Story<BarSpinnerProps> = (props) => <BarSpinner {...props} />;

export const Bar = Template.bind({});
