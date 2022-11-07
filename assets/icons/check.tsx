import { IconProps } from "./";
import React from "react";

export const Check: React.FC<IconProps> = ({ className, style }) => {
  return (
    <svg className={className} viewBox="0 0 48 48">
      <path
        className={style}
        d="M20,28.9l12.9-12.9c0.6-0.6,1.5-0.6,2.1,0c0.5,0.5,0.6,1.4,0.1,2l-0.1,0.2l-14,14
	c-0.5,0.5-1.4,0.6-2,0.1l-0.2-0.1l-6-6c-0.6-0.6-0.6-1.5,0-2.1c0.5-0.5,1.4-0.6,2-0.1l0.2,0.1L20,28.9l12.9-12.9L20,28.9z"
      />
    </svg>
  );
};
