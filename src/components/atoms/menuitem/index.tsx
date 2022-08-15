import React from "react";
import { IconKey } from "../../../../public/assets/icons";
import { Divider, Orientation } from "../divider";
import { Icon } from "../icon";
import { Container } from "./style";

export type MenuItemProps = {
  icon?: IconKey;
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
