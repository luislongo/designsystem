import React from "react";
import { ComponentMeta, Story } from "@storybook/react";
import { BlockSpinner, BlockSpinnerProps } from ".";

export default {
  title: "Spinners",
  component: BlockSpinner,
} as ComponentMeta<typeof BlockSpinner>;

const Template: Story<BlockSpinnerProps> = (props) => (
  <BlockSpinner {...props} />
);

export const Box = Template.bind({});
