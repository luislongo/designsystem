import React from "react";
import { ComponentMeta, Story } from "@storybook/react";
import {
  FlowerSpinner,
  FlowerSpinnerProps,
} from "../../../src/components/atoms/spinners/flowerSpinner";

export default {
  title: "Design System/Atoms/Spinners/Flower Spinner",
  component: FlowerSpinner,
} as ComponentMeta<typeof FlowerSpinner>;

const Template: Story<FlowerSpinnerProps> = (props) => (
  <FlowerSpinner {...props} />
);

export const Default = Template.bind({});
