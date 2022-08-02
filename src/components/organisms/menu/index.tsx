import React from "react";
import { Divider, Orientation } from "../../atoms/divider";
import { MenuSection, MenuSectionProps } from "../../molecules/menuSection";
import { Container } from "./style";

export interface MenuProps {
  sections: MenuSectionProps[];
}

export const Menu: React.FC<MenuProps> = ({ sections }) => {
  return (
    <Container>
      {sections.map((section) => (
        <>
          <Divider orientation={Orientation.Horizontal} />

          <MenuSection {...section} />
        </>
      ))}
    </Container>
  );
};
