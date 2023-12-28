import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

import logo from "../../assets/logo-coffe-delivery.svg";
import { MapPin } from "phosphor-react";
import { ShoppingCart } from "phosphor-react";

import { HeaderContainer } from "./styles";
import HeaderButton from "./components/HeaderButton";

function Header() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  function handleNavigate(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    if (cart.items.length == 0) {
      e.preventDefault();
      alert("Escolha os itens do seu carrinho!");
    }

    if (cart.orderConfirmed) {
      e.preventDefault();
      navigate("/success");
    }
  }

  let itemsQuantity = 0;
  for (const cartItem of cart.items) {
    itemsQuantity += cartItem.quantity;
  }

  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to="/">
          <img src={logo} alt="Coffee Delivery" />
        </NavLink>
        <nav>
          <HeaderButton
            icon={<MapPin weight="fill" size={22} />}
            text="Porto Alegre, RS"
            background="purple-light"
            color="base-purple"
          />

          <NavLink to="/checkout" onClick={(e) => handleNavigate(e)}>
            <HeaderButton
              icon={<ShoppingCart weight="fill" size={22} />}
              background="yellow-light"
              color="yellow-dark"
              pointer={true}
            >
              {itemsQuantity > 0 && (
                <span className="items-cart">{itemsQuantity}</span>
              )}
            </HeaderButton>
          </NavLink>
        </nav>
      </div>
    </HeaderContainer>
  );
}

export default Header;
