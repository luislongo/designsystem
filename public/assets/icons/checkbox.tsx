import { IconProps } from "./";
import React from "react";

export const Checkbox: React.FC<IconProps> = ({ className, style }) => {
  return (
    <svg viewBox="0 0 48 48" className={className}>
      <g id="ic_fluent_checkbox_checked_24_regular">
        <path
          className={style}
          d="M36.5,6c3,0,5.5,2.5,5.5,5.5v25c0,3-2.5,5.5-5.5,5.5h-25c-3,0-5.5-2.5-5.5-5.5
			v-25C6,8.5,8.5,6,11.5,6H36.5z M36.5,9h-25C10.1,9,9,10.1,9,11.5v25c0,1.4,1.1,2.5,2.5,2.5h25c1.4,0,2.5-1.1,2.5-2.5v-25
			C39,10.1,37.9,9,36.5,9z"
        />
      </g>
    </svg>
  );
};
