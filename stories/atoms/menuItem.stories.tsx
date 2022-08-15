import React from "react";
import { ComponentMeta, Story } from "@storybook/react";
import { MenuItem, MenuItemProps } from "../../src/components";
import { IconKey } from "../../public/assets/icons";

export default {
  title: "Design System/Atoms/MenuItem",
  component: MenuItem,
} as ComponentMeta<typeof MenuItem>;

const Template: Story<MenuItemProps> = (props) => <MenuItem {...props} />;

export const Primary = Template.bind({});
Primary.args = { icon: IconKey.Flag, label: "Sinalizar" };
