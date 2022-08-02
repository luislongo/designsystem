import styled, { css } from "styled-components";
import tw from "tailwind.macro";

export const Container = styled.li`
  ${tw`flex items-center p-1 h-4 w-96`}

  &:hover {
    ${tw`bg-neutral-300`}
  }

  & > div {
    ${tw`mr-3`}
  }

  & > label {
    ${tw`font-sans text-sm `}
  }
`;
