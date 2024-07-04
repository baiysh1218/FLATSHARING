import {
  MouseEventHandler,
  ButtonHTMLAttributes,
  DetailedHTMLProps,
} from "react";

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
