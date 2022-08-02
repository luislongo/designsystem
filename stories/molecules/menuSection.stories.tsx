import React from "react";
import { ComponentMeta, Story } from "@storybook/react";
import { SVGKey } from "../../public/assets/icons";
import { MenuSection, MenuSectionProps } from "../../src/components";

export default {
  title: "MenuSection",
  component: MenuSection,
} as ComponentMeta<typeof MenuSection>;

const Template: Story<MenuSectionProps> = (props) => <MenuSection {...props} />;

export const Primary = Template.bind({});
Primary.args = {
  items: [
    { icon: SVGKey.Flag, label: "Sinalizar" },
    { icon: SVGKey.Flag, label: "Sinalizar" },
    { icon: SVGKey.Flag, label: "Sinalizar" },
    { icon: SVGKey.Flag, label: "Sinalizar" },
  ],
};
