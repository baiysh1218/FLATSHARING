import { MouseEventHandler } from "react";

export type ArrowProps = {
  className?: string;
  style?: React.CSSProperties;
  onClick?: MouseEventHandler<HTMLDivElement>;
};
