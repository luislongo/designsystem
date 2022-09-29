import React from "react";
import { ComponentMeta, Story } from "@storybook/react";
import { Slider, SliderProps } from "../../src/components/molecules/slider";

export default {
  title: "Design System/Molecules/Slider",
  component: Slider,
} as ComponentMeta<typeof Slider>;

const Template: Story<SliderProps> = (props) => <Slider {...props} />;

export const Primary = Template.bind({});
Primary.args = {};
