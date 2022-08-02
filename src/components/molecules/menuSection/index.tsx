import React from "react";
import { MenuItem, MenuItemProps } from "../../atoms/menuitem";
import { Container } from "./style";

export interface MenuSectionProps {
  items: MenuItemProps[];
}

export const MenuSection: React.FC<MenuSectionProps> = ({ items }) => {
  return (
    <Container>
      {items.map((item) => (
        <MenuItem {...item} />
      ))}
    </Container>
  );
};
