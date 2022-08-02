import React from "react";
import { Flag } from "./flag";
import { Settings } from "./settings";

export enum SVGKey {
  Flag,
  Settings,
}

export const SVG: { [key in SVGKey]: () => React.FC<SVGIconProps> } = {
  [SVGKey.Flag]: () => Flag,
  [SVGKey.Settings]: () => Settings,
};

export interface SVGIconProps {
  className?: string;
  style?: string;
}
