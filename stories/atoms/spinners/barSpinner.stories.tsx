import React from "react";
import { ComponentMeta, Story } from "@storybook/react";
import {
  BarSpinner,
  BarSpinnerProps,
} from "../../../src/components/atoms/spinners/barSpinner";

export default {
  title: "Design System/Atoms/Spinners/Bar Spinner",
  component: BarSpinner,
} as ComponentMeta<typeof BarSpinner>;

const Template: Story<BarSpinnerProps> = (props) => <BarSpinner {...props} />;

export const Default = Template.bind({});
