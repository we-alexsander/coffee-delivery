import { useContext } from "react";
import { CartContext } from "../../../../contexts/CartContext";

import { Card, Container } from "./styles";
import CartItem from "../../../../components/CartItem";

function ProductForm() {
  const { cart } = useContext(CartContext);

  let tot = 0;
  cart.items.forEach((cartItem) => {
    tot += parseFloat(cartItem.price) * cartItem.quantity;
  });

  return (
    <Container>
      <Card>
        {cart.items.map((cartItem, index) => (
          <CartItem
            key={index}
            image={cartItem.image}
            name={cartItem.name}
            price={cartItem.price}
            quantity={cartItem.quantity}
          />
        ))}
        <div className="full-infos">
          <div className="infos">
            <p className="info-text">Total de itens</p>
            <p className="info-price">R$ {tot.toFixed(2)}</p>
          </div>
          <div className="infos">
            <p className="info-text">Entrega</p>
            <p className="info-price">R$ 3,50</p>
          </div>
          <div className="infos">
            <p className="info-text last">Total</p>
            <p className="info-price last">R$ {(tot + 3.5).toFixed(2)}</p>
          </div>
        </div>
        {/* <button className="button-confirm">CONFIRMAR PEDIDO</button> */}
        <input
          className="button-confirm"
          type="submit"
          value="CONFIRMAR PEDIDO"
        />
      </Card>
    </Container>
  );
}

export default ProductForm;
