import React from "react";
import { ComponentMeta, Story } from "@storybook/react";
import { IconKey } from "../../public/assets/icons";
import { MenuSection, MenuSectionProps } from "../../src/components";

export default {
  title: "Design System/Molecules/MenuSection",
  component: MenuSection,
} as ComponentMeta<typeof MenuSection>;

const Template: Story<MenuSectionProps> = (props) => <MenuSection {...props} />;

export const Primary = Template.bind({});
Primary.args = {
  items: [
    { icon: IconKey.Flag, label: "Sinalizar" },
    { icon: IconKey.Flag, label: "Sinalizar" },
    { icon: IconKey.Flag, label: "Sinalizar" },
    { icon: IconKey.Flag, label: "Sinalizar" },
  ],
};
