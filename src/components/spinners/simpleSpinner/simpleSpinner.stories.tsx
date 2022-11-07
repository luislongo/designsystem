import React from "react";
import { ComponentMeta, Story } from "@storybook/react";
import { SimpleSpinner, SpinnerProps } from ".";

export default {
  title: "Spinners",
  component: SimpleSpinner,
} as ComponentMeta<typeof SimpleSpinner>;

const Template: Story<SpinnerProps> = (props) => <SimpleSpinner {...props} />;

export const Default = Template.bind({});
