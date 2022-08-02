import styled, { css } from "styled-components";
import tw from "tailwind.macro";
import { Orientation } from ".";

interface StyleProps {
  orientation?: Orientation;
}

const size = (props: StyleProps) => {
  if (props.orientation === Orientation.Horizontal) return tw`w-full h-0`;
  if (props.orientation === Orientation.Vertical) return tw`w-0 h-full`;
};

const border = (props: StyleProps) => {
  if (props.orientation === Orientation.Horizontal)
    return tw`border-b border-neutral-600 border-solid`;
  if (props.orientation == Orientation.Vertical)
    return tw`border-l border-neutral-600 border-solid`;
};

export const Container = styled.div<StyleProps>`
  border: 0px transparent solid;

  ${border};
  ${size}
`;
