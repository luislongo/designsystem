import styled, { css, keyframes } from "styled-components";
import tw from "twin.macro";

interface StyleProps {
  nrOfBoxes: number;
}

interface point {
  x: number;
  y: number;
}

const firstChildAnimation = css`
  & > *:nth-child(1) {
    animation: ${keyframes`
      0% {
        x: 6;
        y: 6;
      }
      12.5% {
        x: 6;
        y: 18;
      }
      100% {
        x: 6;
        y: 18;
      }
    `} 2s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
  }
`;

const secondChildAnimation = css`
  & > *:nth-child(2) {
    animation: ${keyframes`
      0% {
        x: 6;
        y: 18;
      }
      12.5% {
        x: 6;
        y: 30;
      }
      25% {
        x: 18;
        y: 30;
      }
      37.5% {
        x: 18;
        y: 18;
      }
      75% {
        x: 18;
        y: 18;
      }
      87.5% {
        x: 18;
        y: 6;
      }
      100% {
        x: 6;
        y: 6;
    `} 2s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
  }
`;

const thirdChildAnimation = css`
  & > *:nth-child(3) {
    animation: ${keyframes`
      0% {
        x: 18;
        y: 18;
      }
      25% {
        x: 18;
        y: 18;
      }
      37.5% {
        x: 18;
        y: 6;
      }
      50% {
        x: 30;
        y: 6;
      }
      62.5% {
        x: 30;
        y: 18;
      }
      75% {
        x: 30;
        y: 18;
      }
      100% {
        x: 30;
        y: 18;
      }
    `} 2s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
  }
`;

const fourthChildAnimation = css`
  & > *:nth-child(4) {
    animation: ${keyframes`
      0% {
        x: 30;
        y: 18;
      }
      50% {
        x: 30;
        y: 18;
      }
      62.5% {
        x: 30;
        y: 30;
      }
      75% {
        x: 18;
        y: 30;
      }
      87.5% {
        x: 18;
        y: 18;
      }
      100% {
        x: 18;
        y: 18;
      }
    `} 2s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
  }
`;

export const Container = styled.svg<StyleProps>`
  ${tw`relative w-full h-full`}

  & > * {
    stroke-width: 2;
    stroke: white;
    ${tw` fill-current  absolute`};
  }

  ${firstChildAnimation}
  ${secondChildAnimation}
  ${thirdChildAnimation}
  ${fourthChildAnimation}
`;
