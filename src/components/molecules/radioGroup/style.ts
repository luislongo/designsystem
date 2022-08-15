import styled, { css } from "styled-components";
import tw from "twin.macro";

export const Container = styled.ul`
  ${tw`list-none`}

  & > * {
    ${tw`grid grid-cols-2 gap-4`}
  }
`;
