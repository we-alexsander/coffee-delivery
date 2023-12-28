import { Trash } from "phosphor-react";
import { ButtonContainer } from "./styles";

interface RemoveButtonProps {
  onRemove: () => void;
}

function RemoveButton({ onRemove }: RemoveButtonProps) {
  return (
    <ButtonContainer type="button" onClick={onRemove}>
      <Trash className="icon" />
      <span>Remover</span>
    </ButtonContainer>
  );
}

export default RemoveButton;
