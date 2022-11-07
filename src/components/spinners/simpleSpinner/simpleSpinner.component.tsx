import React from "react";
import { Container } from "./style";

export interface SpinnerProps {}

export const SimpleSpinner: React.FC<SpinnerProps> = (props) => {
  const [phase, setPhase] = React.useState(0);
  const angle = 4;
  setTimeout(() => {
    setPhase(phase + 0.1);
  }, 30);

  const start = () => {
    return `${(24 + 18 * Math.cos(phase)).toFixed(2)} ${(
      24 +
      18 * Math.sin(phase)
    ).toFixed(2)}`;
  };

  const end = () => {
    return `${(24 + 18 * Math.cos(phase + angle)).toFixed(2)} ${(
      24 +
      18 * Math.sin(phase + angle)
    ).toFixed(2)}`;
  };

  return (
    <Container viewBox="0 0 48 48">
      <path
        d={`M ${start()} A 18 18 0 1 1 ${end()}`}
        strokeWidth="8"
        stroke="black"
        strokeLinecap="round"
        fill="none"
      ></path>
    </Container>
  );
};
