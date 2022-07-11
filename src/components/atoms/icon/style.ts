import styled, { css } from "styled-components";
import tw from "tailwind.macro";

const size = (props: any) => {
  if (props.size === "s") return tw`w-3 h-3`;
  if (props.size === "m") return tw`w-4 h-4`;
  if (props.size === "l") return tw`w-6 h-6`;
  if (props.size === "xl") return tw`w-8 h-8`;
};

export const Container = styled.img`
  ${size}
`;
