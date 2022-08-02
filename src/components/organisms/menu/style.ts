import styled, { css } from "styled-components";
import tw from "tailwind.macro";

export const Container = styled.div`
  ${tw`min-w-xl list-none`}

  & > li {
    ${tw`flex flex-row items-stretch px-2`}
  }
`;
