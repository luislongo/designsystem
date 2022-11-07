import React from "react";
import { Flag } from "./flag";
import { Settings } from "./settings";
import { Checkbox } from "./checkbox";
import { Check } from "./check";
import { Radiobox } from "./radiobox";
import { Radio } from "./radio";

export enum IconKey {
  Flag,
  Settings,
  Checkbox,
  Check,
  Radiobox,
  Radio,
}

export const SVGIcon: {
  [key in IconKey]: () => React.FC<IconProps>;
} = {
  [IconKey.Flag]: () => Flag,
  [IconKey.Settings]: () => Settings,
  [IconKey.Checkbox]: () => Checkbox,
  [IconKey.Check]: () => Check,
  [IconKey.Radiobox]: () => Radiobox,
  [IconKey.Radio]: () => Radio,
};

export interface IconProps {
  className?: string;
  style?: string;
}
