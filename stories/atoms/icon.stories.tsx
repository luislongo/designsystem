import { ComponentMeta, Story } from "@storybook/react";
import { IconKey } from "../../public/assets/icons";
import { Icon, IconProps } from "../../src/components";
import React from "react";
export default {
  title: "Design System/Atoms/Icon",
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: Story<IconProps> = ({ icon, size }) => (
  <Icon icon={icon} size={size} />
);

export const Flag = Template.bind({});
Flag.args = { icon: IconKey.Flag, size: "m" };

export const Settings = Template.bind({});
Settings.args = { icon: IconKey.Settings, size: "m" };
