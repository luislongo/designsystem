import React from "react";
import { SVGKey } from "@icons";
import { Divider, Orientation } from "@components/atoms/divider";
import { Icon } from "@components/atoms/icon";
import { Container } from "./style";

export type MenuItemProps = {
  icon?: SVGKey;
  label: string;
};

export const MenuItem: React.FC<MenuItemProps> = ({ icon, label }) => {
  return (
    <Container>
      {icon !== undefined && <Icon icon={icon} size="m" />}
      <Divider orientation={Orientation.Vertical} />
      <label>{label}</label>
    </Container>
  );
};
