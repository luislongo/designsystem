import React, { FC } from "react";
import { Container } from "./style";

export interface BarSpinnerProps {}

export const BarSpinner: FC<BarSpinnerProps> = ({}) => {
  const nrOfBars = 3;
  const [phase, setPhase] = React.useState(0);

  setTimeout(() => {
    setPhase(phase + Math.SQRT2 / 10);
  }, 20);

  const barHeight = (index: number) => {
    return (
      32 + 10 * Math.max(Math.sin((index / nrOfBars) * Math.PI + phase), 0)
    );
  };

  const makeBar = (index: number) => {
    return (
      <rect
        x={Math.floor(index - Math.floor(nrOfBars / 2)) * 12 + 24}
        y={24 - 0.5 * barHeight(index)}
        width={8}
        height={barHeight(index)}
      />
    );
  };

  return (
    <Container viewBox="0 0 48 48">
      {[...Array(nrOfBars).keys()].map((i) => makeBar(i))}
    </Container>
  );
};
