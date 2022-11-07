import React, { FC } from "react";
import { Container } from "./style";

export interface BlockSpinnerProps {}

export const BlockSpinner: FC<BlockSpinnerProps> = ({}) => {
  const nrOfBoxes = 4;
  const side = 12;

  const makeBox = (i: number) => {
    return <rect x={4 + side * i} y={18} width={12} height={12} rx={2} />;
  };

  return (
    <Container viewBox="0 0 48 48" nrOfBoxes={nrOfBoxes}>
      <rect width={side} height={side} x={4} y={6} rx={2} />
      {[...Array(nrOfBoxes - 1).keys()].map((i) => makeBox(i))}
    </Container>
  );
};
