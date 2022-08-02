import React from "react";
import { SVG, SVGKey } from "../../../../public/assets/icons";
import { Container } from "./style";

export type IconProps = {
  icon: SVGKey;
  size?: "s" | "m" | "l" | "xl";
};

export const Icon: React.FC<IconProps> = (props) => {
  const size = props.size || "s";
  const IC = SVG[props.icon || SVGKey.Flag]();

  return (
    <Container size={size}>
      <IC />
    </Container>
  );
};
