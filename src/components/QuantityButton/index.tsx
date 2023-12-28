import { Minus, Plus } from "phosphor-react";
import { Container } from "./styles";

interface QuantityButtonProps {
  onChangeQuantity: (data: number) => void;
  currentQuantity: number;
}

function QuantityButton({
  currentQuantity,
  onChangeQuantity,
}: QuantityButtonProps) {
  function handleDecreaseQuantity() {
    if (currentQuantity > 1) {
      onChangeQuantity(currentQuantity - 1);
    }

    return;
  }

  function handleIncreaseQuantity() {
    onChangeQuantity(currentQuantity + 1);
  }

  return (
    <Container>
      <button type="button" onClick={handleDecreaseQuantity}>
        <Minus weight="bold" />
      </button>
      <input type="number" value={currentQuantity} disabled />
      <button type="button" onClick={handleIncreaseQuantity}>
        <Plus weight="bold" />
      </button>
    </Container>
  );
}

export default QuantityButton;
