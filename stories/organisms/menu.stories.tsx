import React from "react";
import { ComponentMeta, Story } from "@storybook/react";
import { IconKey } from "../../public/assets/icons";
import { Menu, MenuProps } from "../../src/components";

export default {
  title: "Design System/Organisms/Menu",
  component: Menu,
} as ComponentMeta<typeof Menu>;

const Template: Story<MenuProps> = (props) => <Menu {...props} />;

export const Primary = Template.bind({});
Primary.args = {
  sections: [
    {
      items: [
        { icon: IconKey.Flag, label: "Sinalizar" },
        { icon: IconKey.Flag, label: "Sinalizar" },
        { icon: IconKey.Flag, label: "Sinalizar" },
        { icon: IconKey.Flag, label: "Sinalizar" },
      ],
    },
    {
      items: [
        { icon: IconKey.Flag, label: "Sinalizar" },
        { icon: IconKey.Flag, label: "Sinalizar" },
        { icon: IconKey.Flag, label: "Sinalizar" },
        { icon: IconKey.Flag, label: "Sinalizar" },
      ],
    },
    {
      items: [
        { icon: IconKey.Flag, label: "Sinalizar" },
        { icon: IconKey.Flag, label: "Sinalizar" },
        { icon: IconKey.Flag, label: "Sinalizar" },
        { icon: IconKey.Flag, label: "Sinalizar" },
      ],
    },
  ],
};
