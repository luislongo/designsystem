import React from "react";
import { ComponentMeta, Story } from "@storybook/react";
import { FlowerSpinner, FlowerSpinnerProps } from ".";

export default {
  title: "Spinners",
  component: FlowerSpinner,
} as ComponentMeta<typeof FlowerSpinner>;

const Template: Story<FlowerSpinnerProps> = (props) => (
  <FlowerSpinner {...props} />
);

export const Flower = Template.bind({});
