import React from "react";
import { ComponentMeta, Story } from "@storybook/react";
import {
  WaveSpinner,
  WaveSpinnerProps,
} from "../../../src/components/atoms/spinners/waveSpinner";

export default {
  title: "Design System/Atoms/Spinners/Wave Spinner",
  component: WaveSpinner,
} as ComponentMeta<typeof WaveSpinner>;

const Template: Story<WaveSpinnerProps> = (props) => <WaveSpinner {...props} />;

export const Default = Template.bind({});
