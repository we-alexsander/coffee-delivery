import { ReactElement } from "react";

import { Item } from "./styles";

export interface InfoItemProps {
  icon: ReactElement;
  text: string;
  bgicon: string;
}

function InfoItem(props: InfoItemProps) {
  return (
    <Item bgicon={props.bgicon}>
      {props.icon}
      <span>{props.text}</span>
    </Item>
  );
}

export default InfoItem;
