import React from "react";
import { Container } from "./style";

export type IconProps = {
  icon: string;
  size?: "s" | "m" | "l" | "xl";
};

export const Icon: React.FC<IconProps> = (props) => {
  const size = props.size || "s";
  const icon = props.icon || "";

  return <Container src={icon} {...{ size }} />;
};
