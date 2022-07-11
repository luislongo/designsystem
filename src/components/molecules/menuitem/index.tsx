import React from "react";
import { Icon } from "../../atoms/icon";
import { Container } from "./style";

export type MenuItemProps = {
  icon?: string;
  label: string;
};

export const MenuItem: React.FC<MenuItemProps> = ({ icon, label }) => {
  return (
    <Container>
      {icon && <Icon icon={icon} size="m" />}
      <label>{label}</label>
    </Container>
  );
};
