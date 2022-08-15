import styled, { css } from "styled-components";
import tw from "twin.macro";

interface StyleProps {
  checked: boolean;
}

const checkVisible = (props: StyleProps) => {
  return props.checked
    ? tw`duration-500 ease-in-out opacity-100`
    : tw`duration-500 ease-in-out opacity-0`;
};

export const Container = styled.div<StyleProps>`
  ${tw`relative`}

  & > * {
    ${tw`absolute top-0 left-0`}
  }

  & > *:last-child {
    ${checkVisible}
  }
`;
