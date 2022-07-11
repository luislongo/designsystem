import styled, { css } from "styled-components";
import tw from "tailwind.macro";

export const Container = styled.li`
  ${tw`flex items-baseline p-2`}

  &>label {
    ${tw`font-serif ml-2 text-5xl `}
  }
`;
