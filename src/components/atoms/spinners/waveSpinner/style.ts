import styled, { css, keyframes } from "styled-components";
import tw from "twin.macro";

const cx = (perc: number): number => {
  if (perc > 0.3) return cx(0.3);

  return (perc / 0.3) * 76 - 2;
};

const cy = (perc: number): number => {
  if (perc > 0.3) return cy(0.3);

  return 26 + 12 * (1 - Math.cos((perc / 0.3) * Math.PI * 2));
};

const r = (perc: number): number => {
  if (perc > 0.3) return r(0.3);

  return 1 + 5 * Math.sin((perc / 0.3) * Math.PI);
};

const childAnimetion = keyframes`
  0% {
    cx: ${cx(0)};
    cy: ${cy(0)};
    r: ${r(0)};
  }
  5% {
    cx: ${cx(0.05)};
    cy: ${cy(0.05)};
    r: ${r(0.05)};
  }
  10% {
    cx: ${cx(0.1)};
    cy: ${cy(0.1)};
    r: ${r(0.1)};
  }
  15% {
    cx: ${cx(0.15)};
    cy: ${cy(0.15)};
    r: ${r(0.15)};
  }
  20% {
    cx: ${cx(0.2)};
    cy: ${cy(0.2)};
    r: ${r(0.2)};
  }
  25% {
    cx: ${cx(0.25)};
    cy: ${cy(0.25)};
    r: ${r(0.25)};
  }
  30% {
    cx: ${cx(0.3)};
    cy: ${cy(0.3)};
    r: ${r(0.3)};
  }
  100% {
    cx: ${cx(1)};
    cy: ${cy(1)};
    r: ${r(1)};
  }
`;

export const Container = styled.svg`
  ${tw`w-full h-full`}

  & > *:nth-child(1) {
    animation: ${childAnimetion} 2s linear infinite;
    animation-delay: 0s;
  }
  & > *:nth-child(2) {
    animation: ${childAnimetion} 2s linear infinite;
    animation-delay: 0.15s;
  }
  & > *:nth-child(3) {
    animation: ${childAnimetion} 2s linear infinite;
    animation-delay: 0.3s;
  }
  & > *:nth-child(4) {
    animation: ${childAnimetion} 2s linear infinite;
    animation-delay: 0.45s;
  }
  & > *:nth-child(5) {
    animation: ${childAnimetion} 2s linear infinite;
    animation-delay: 0.6s;
  }
`;
