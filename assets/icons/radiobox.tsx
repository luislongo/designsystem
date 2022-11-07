import { IconProps } from ".";
import React from "react";

export const Radiobox: React.FC<IconProps> = ({ className, style }) => {
  return (
    <svg className={className} viewBox="0 0 48 48">
      <path
        className={style}
        d="M24,42c-9.9,0-18-8.1-18-18S14.1,6,24,6s18,8.1,18,18S33.9,42,24,42z M24,38.4
	c8,0,14.4-6.4,14.4-14.4S32,9.6,24,9.6S9.6,16,9.6,24S16,38.4,24,38.4z"
      />
    </svg>
  );
};
