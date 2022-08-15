import { IconProps } from ".";
import React from "react";

export const Radio: React.FC<IconProps> = ({ className, style }) => {
  return (
    <svg className={className} viewBox="0 0 48 48">
      <circle className={style} cx="24" cy="24" r="9" />
    </svg>
  );
};
