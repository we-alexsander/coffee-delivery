import { Button } from "./styles";

import { ReactNode } from "react";

export interface HeaderButtonProps {
  icon: ReactNode;
  text?: string;
  background: string;
  color: string;
  pointer?: boolean;
  children?: ReactNode;
}

function HeaderButton(props: HeaderButtonProps) {
  return (
    <Button
      background={props.background}
      color={props.color}
      style={{ cursor: props.pointer ? "pointer" : "default" }}
    >
      {props.icon}
      {props.text && <span>{props.text}</span>}
      {props.children}
    </Button>
  );
}

export default HeaderButton;
