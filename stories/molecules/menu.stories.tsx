import React from "react";
import { ComponentMeta, Story } from "@storybook/react";
import { SVGKey } from "../../src/assets/icons";
import { Menu, MenuProps } from "../../src/components";

export default {
  title: "Menu",
  component: Menu,
} as ComponentMeta<typeof Menu>;

const Template: Story<MenuProps> = (props) => <Menu {...props} />;

export const Primary = Template.bind({});
Primary.args = {
  sections: [
    {
      items: [
        { icon: SVGKey.Flag, label: "Sinalizar" },
        { icon: SVGKey.Flag, label: "Sinalizar" },
        { icon: SVGKey.Flag, label: "Sinalizar" },
        { icon: SVGKey.Flag, label: "Sinalizar" },
      ],
    },
    {
      items: [
        { icon: SVGKey.Flag, label: "Sinalizar" },
        { icon: SVGKey.Flag, label: "Sinalizar" },
        { icon: SVGKey.Flag, label: "Sinalizar" },
        { icon: SVGKey.Flag, label: "Sinalizar" },
      ],
    },
    {
      items: [
        { icon: SVGKey.Flag, label: "Sinalizar" },
        { icon: SVGKey.Flag, label: "Sinalizar" },
        { icon: SVGKey.Flag, label: "Sinalizar" },
        { icon: SVGKey.Flag, label: "Sinalizar" },
      ],
    },
  ],
};
