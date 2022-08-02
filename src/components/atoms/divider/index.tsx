import React from "react";
import { Container } from "./style";

export enum Orientation {
  Horizontal,
  Vertical,
}

export interface DividerProps {
  orientation: Orientation;
}

export const Divider: React.FC<DividerProps> = ({ orientation }) => {
  return <Container orientation={orientation} />;
};
