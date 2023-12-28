import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { Container, Detail, OrderInformation } from "./styles";
import deliveryImage from "../../assets/delivery.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

function OrderPlaced() {
  const { cart } = useContext(CartContext);

  return (
    <Container>
      <div className="infos">
        <p className="title">Uhu! Pedido confirmado</p>
        <p className="subtitle">
          Agora é só aguardar que logo o café chegará até você
        </p>
      </div>
      <div className="content">
        <OrderInformation>
          <Detail bgcolor="base-purple">
            <MapPin className="icon" size={16} weight="fill" />
            <div>
              <p className="info">
                Entrega em &nbsp;
                <b>
                  {cart.delivery.street}, {cart.delivery.number}
                </b>
              </p>
              <p className="info">
                {cart.delivery.district} - {cart.delivery.city},
                {cart.delivery.state}
              </p>
            </div>
          </Detail>
          <Detail bgcolor="base-yellow">
            <Timer className="icon" size={16} weight="fill" />
            <div>
              <p className="info">Previsão de entrega</p>
              <p className="info highlighted">20 min - 30 min</p>
            </div>
          </Detail>
          <Detail bgcolor="yellow-dark">
            <CurrencyDollar className="icon" size={16} />
            <div>
              <p className="info">Pagamento na entrega</p>
              <p className="info highlighted">{cart.delivery.paymentMethod}</p>
            </div>
          </Detail>
        </OrderInformation>
        <div>
          <img src={deliveryImage} alt="Delivery" />
        </div>
      </div>
    </Container>
  );
}

export default OrderPlaced;
