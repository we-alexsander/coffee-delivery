import { useContext } from "react";
import QuantityButton from "../QuantityButton";
import RemoveButton from "../RemoveButton";
import { Item } from "./styles";
import { CartContext } from "../../contexts/CartContext";

interface CartItemProps {
  image: string;
  name: string;
  price: string;
  quantity: number;
}

function CartItem({ image, name, price, quantity }: CartItemProps) {
  const { changeQuantityProduct, removeProductInCart } =
    useContext(CartContext);

  function handleQuantityChange(q: number) {
    changeQuantityProduct(name, q);
  }

  function handleRemoveProduct() {
    removeProductInCart(name);
  }

  return (
    <Item>
      <div className="infos">
        <img src={image} alt="Coffee" />
        <div className="infos-details">
          <p className="item-title">{name}</p>
          <div className="action-buttons">
            <QuantityButton
              currentQuantity={quantity}
              onChangeQuantity={handleQuantityChange}
            />
            <RemoveButton onRemove={handleRemoveProduct} />
          </div>
        </div>
      </div>
      <p className="item-price">
        R$ {(parseFloat(price) * quantity).toFixed(2)}
      </p>
    </Item>
  );
}

export default CartItem;
