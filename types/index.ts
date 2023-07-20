import { MouseEventHandler } from "react";

export type CustomButtonProps = {
  title: string;
  btnType?: "button" | "submit" | "reset" | undefined;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
};
