import React from "react";
import { ComponentMeta, Story } from "@storybook/react";
import { WaveSpinner, WaveSpinnerProps } from ".";

export default {
  title: "Spinners",
  component: WaveSpinner,
} as ComponentMeta<typeof WaveSpinner>;

const Template: Story<WaveSpinnerProps> = (props) => <WaveSpinner {...props} />;

export const Wave = Template.bind({});
