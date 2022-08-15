import React, { useEffect, useState } from "react";
import { Container } from "./style";

export interface PlayerIconProps {
  isPlaying: boolean;
}

export const PlayerIcon: React.FC<PlayerIconProps> = (props) => {
  const [phase, setPhase] = useState(0);
  const [amplitude, setAmplitude] = useState(15);

  setTimeout(() => {
    const targetPhase = props.isPlaying ? phase + Math.SQRT2 / 15 : phase;

    const targetAmplitude = props.isPlaying ? 5 : 0;

    setPhase(targetPhase);
    setAmplitude(amplitude + (targetAmplitude - amplitude) / 10);
  }, 20);

  const halfWidth = (index: number) => {
    return (1.5 + Math.sin(index / Math.SQRT2 + phase)) * amplitude;
  };

  const center = (index: number) => {
    return 24 - Math.sin(index + 1 + phase) * amplitude;
  };

  const makeLine = (index: number) => {
    return (
      <line
        stroke-width="4"
        stroke-linecap="round"
        stroke-miterlimit="10"
        x1={8 + 8 * index}
        y1={center(index) + halfWidth(index)}
        x2={8 + 8 * index}
        y2={center(index) - halfWidth(index)}
      />
    );
  };

  return (
    <Container x="0px" y="0px" viewBox="0 0 48 48">
      {[...Array(5).keys()].map((i) => makeLine(i))}
    </Container>
  );
};
