import React from "react";
import { ComponentMeta, Story } from "@storybook/react";
import {
  BlockSpinner,
  BlockSpinnerProps,
} from "../../../src/components/atoms/spinners/blockSpinner";

export default {
  title: "Design System/Atoms/Spinners/Box Spinner",
  component: BlockSpinner,
} as ComponentMeta<typeof BlockSpinner>;

const Template: Story<BlockSpinnerProps> = (props) => (
  <BlockSpinner {...props} />
);

export const Default = Template.bind({});
