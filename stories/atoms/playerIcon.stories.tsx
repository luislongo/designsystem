import React from "react";
import { ComponentMeta, Story } from "@storybook/react";
import {
  PlayerIcon,
  PlayerIconProps,
} from "../../src/components/atoms/playerIcon";

export default {
  title: "Design System/Atoms/Player Icon",
  component: PlayerIcon,
} as ComponentMeta<typeof PlayerIcon>;

const Template: Story<PlayerIconProps> = (props) => <PlayerIcon {...props} />;

export const Enabled = Template.bind({});
export const Disabled = Template.bind({});
Disabled.args = { disabled: true };
