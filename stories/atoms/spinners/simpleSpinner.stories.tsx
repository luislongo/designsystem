import React from "react";
import { ComponentMeta, Story } from "@storybook/react";
import {
  SimpleSpinner,
  SpinnerProps,
} from "../../../src/components/atoms/spinners/simpleSpinner";

export default {
  title: "Design System/Atoms/Spinners/Simple Spinner",
  component: SimpleSpinner,
} as ComponentMeta<typeof SimpleSpinner>;

const Template: Story<SpinnerProps> = (props) => <SimpleSpinner {...props} />;

export const Default = Template.bind({});
