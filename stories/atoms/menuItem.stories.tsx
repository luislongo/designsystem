import React from "react";
import { ComponentMeta, Story } from "@storybook/react";
import { MenuItem, MenuItemProps } from "../../src/components";
import { SVGKey } from "../../src/assets/icons";

export default {
  title: "MenuItem",
  component: MenuItem,
} as ComponentMeta<typeof MenuItem>;

const Template: Story<MenuItemProps> = (props) => <MenuItem {...props} />;

export const Primary = Template.bind({});
Primary.args = { icon: SVGKey.Flag, label: "Sinalizar" };
