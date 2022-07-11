import React from "react";
import { ComponentMeta, Story } from "@storybook/react";
import { MenuItem, MenuItemProps } from "../../src/components";
import flag from "../../src/assets/icons/flag.svg";

export default {
  title: "MenuItem",
  component: MenuItem,
} as ComponentMeta<typeof MenuItem>;

const Template: Story<MenuItemProps> = ({ icon, label }) => (
  <MenuItem icon={icon} label={label} />
);

export const Primary = Template.bind({});
Primary.args = { icon: flag, label: "m" };
