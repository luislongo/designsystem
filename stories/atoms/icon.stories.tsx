import { ComponentMeta, Story } from "@storybook/react";
import { SVGKey } from "../../src/assets/icons";
import { Icon, IconProps } from "../../src/components";
import React from "react";
export default {
  title: "Icon",
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: Story<IconProps> = ({ icon, size }) => (
  <Icon icon={icon} size={size} />
);

export const Flag = Template.bind({});
Flag.args = { icon: SVGKey.Flag, size: "m" };

export const Settings = Template.bind({});
Settings.args = { icon: SVGKey.Settings, size: "m" };
