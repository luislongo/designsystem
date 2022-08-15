import React from "react";
import { SVGIcon, IconKey } from "../../../../public/assets/icons";
import { Container } from "./style";

export type IconProps = {
  icon: IconKey;
  size?: "s" | "m" | "l" | "xl";
};

export const Icon: React.FC<IconProps> = (props) => {
  const size = props.size || "s";
  const IC = SVGIcon[props.icon || IconKey.Flag]();

  return (
    <Container size={size}>
      <IC />
    </Container>
  );
};
