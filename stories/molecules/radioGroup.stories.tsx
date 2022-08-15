import React from "react";
import { ComponentMeta, Story } from "@storybook/react";
import { IconKey } from "../../public/assets/icons";
import {
  RadioGroup,
  RadioGroupProps,
} from "../../src/components/molecules/radioGroup";

export default {
  title: "Design System/Molecules/Radio Group",
  component: RadioGroup,
} as ComponentMeta<typeof RadioGroup>;

const Template: Story<RadioGroupProps> = (props) => <RadioGroup {...props} />;

export const Primary = Template.bind({});
Primary.args = {
  items: ["Item A", "Item B", "Item C", "Item D"],
};
