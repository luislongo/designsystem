import { ComponentMeta, Story } from "@storybook/react";
import { Divider, DividerProps } from "../../src/components";
import React from "react";
export default {
  title: "Divider",
  component: Divider,
  decorators: [
    (Story) => <div style={{ width: 300, height: 300 }}>{<Story />}</div>,
  ],
} as ComponentMeta<typeof Divider>;

const Template: Story<DividerProps> = ({ orientation }) => (
  <Divider orientation={orientation} />
);

export const Horizontal = Template.bind({});
Horizontal.args = { orientation: "horizontal" };

export const Vertical = Template.bind({});
Vertical.args = { orientation: "vertical" };
