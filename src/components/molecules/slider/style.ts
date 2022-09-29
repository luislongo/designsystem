import styled, { css } from "styled-components";
import tw from "tailwind.macro";

interface StyleProps {
  checked: boolean;
}

export const Container = styled.div<StyleProps>`
  ${tw`relative h-12 w-12 rounded-full overflow-hidden shadow-lg`}

  &>div {
    ${tw`absolute h-2 w-full bg-neutral-900`}
  }
`;
