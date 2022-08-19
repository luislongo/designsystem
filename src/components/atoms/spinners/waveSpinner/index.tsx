import React from "react";
import { Container } from "./style";

export interface WaveSpinnerProps {}

export const WaveSpinner: React.FC<WaveSpinnerProps> = (props) => {
  return (
    <Container viewBox="0 12 72 60">
      {[...Array(5).keys()].map((i) => {
        return <circle />;
      })}
    </Container>
  );
};
