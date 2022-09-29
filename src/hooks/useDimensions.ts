import { RefObject, useLayoutEffect, useRef, useState } from "react";

export interface DimensionData {
  bottom: number;
  top: number;
  left: number;
  right: number;
  width: number;
  heigth: number;
  x: number;
  y: number;
}

export const useDimension = function <T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [dim, setDim] = useState<DimensionData>();

  useLayoutEffect(() => {
    setDim(ref.current?.getBoundingClientRect().toJSON());
  }, [ref.current]);

  return [ref, dim] as [RefObject<HTMLElement>, DimensionData];
};
