import React from "react";
import { ComponentMeta, Story } from "@storybook/react";
import {
  WavePlayerIcon,
  WavePlayerIconProps,
} from "../../../src/components/atoms/playerIcons/wavePlayerIcon";

export default {
  title: "Design System/Atoms/Player Icons/Wave Player Icon",
  component: WavePlayerIcon,
} as ComponentMeta<typeof WavePlayerIcon>;

const Template: Story<WavePlayerIconProps> = (props) => (
  <WavePlayerIcon {...props} />
);

export const Default = Template.bind({});
Default.args = { isPlaying: true };
