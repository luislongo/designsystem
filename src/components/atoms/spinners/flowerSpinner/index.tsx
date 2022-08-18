import React from "react";
import { Container } from "./style";

export interface FlowerSpinnerProps {}

export const FlowerSpinner: React.FC<FlowerSpinnerProps> = (props) => {
  const [phase, setPhase] = React.useState(0);
  const nrOfPetals = 8;

  setTimeout(() => {
    setPhase(phase + Math.SQRT2 / 30);
  }, 30);

  const cx = (index: number) =>
    24 + 18 * Math.cos((index / nrOfPetals) * Math.PI * 2 + phase);
  const cy = (index: number) =>
    24 + 18 * Math.sin((index / nrOfPetals) * Math.PI * 2 + phase);
  const r = (index: number) =>
    3 + 1.5 * Math.sin((index / nrOfPetals) * Math.PI * 2 + 4 * phase);

  const makePetal = (index: number) => {
    return <circle cx={cx(index)} cy={cy(index)} r={r(index)} />;
  };

  return (
    <Container viewBox="0 0 48 48">
      {[...Array(nrOfPetals).keys()].map((i) => makePetal(i))}
    </Container>
  );
};
