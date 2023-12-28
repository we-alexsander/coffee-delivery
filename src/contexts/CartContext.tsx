import { ReactNode, createContext, useState, useEffect } from "react";
import { CartItemType } from "../types/CartItemType";

type DeliveryType = {
  cep: string;
  street: string;
  number: string;
  complement?: string;
  district: string;
  city: string;
  state: string;
  paymentMethod: string;
};

type CartType = {
  items: CartItemType[];
  delivery: DeliveryType;
  orderPrice: number;
  orderConfirmed?: boolean;
};

interface CreateDeliveryData extends DeliveryType {}

interface CartContextType {
  cart: CartType;
  storeProductInCart: (item: CartItemType) => void;
  changeQuantityProduct: (name: string, q: number) => void;
  removeProductInCart: (name: string) => void;
  createDelivery: (data: CreateDeliveryData) => void;
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
  children: ReactNode;
}

function CartContextProvider({ children }: CartContextProviderProps) {
  const initialCart: CartType = {
    items: [],
    delivery: {
      cep: "",
      street: "",
      number: "",
      complement: "",
      district: "",
      city: "",
      state: "",
      paymentMethod: "",
    },
    orderPrice: 0,
  };

  const [cart, setCart] = useState<CartType>(initialCart);

  function calculateOrderPrice() {
    return cart.items.reduce((acc, curr) => {
      return acc + parseFloat(curr.price) * curr.quantity;
    }, 0);
  }

  function storeProductInCart(item: CartItemType) {
    let currentCart = [...cart.items];

    const existsItem = currentCart.find(
      (cartItem) => cartItem.name == item.name
    );

    if (existsItem) {
      currentCart = currentCart.map((cartItem) => {
        if (cartItem.name == item.name) {
          return { ...cartItem, quantity: cartItem.quantity + item.quantity };
        }
        return cartItem;
      });
    } else {
      currentCart.push(item);
    }

    setCart({ ...cart, items: currentCart });
  }

  function changeQuantityProduct(name: string, q: number) {
    const currentCart = cart.items.map((cartItem) =>
      cartItem.name === name ? { ...cartItem, quantity: q } : cartItem
    );

    setCart({ ...cart, items: currentCart });
  }

  function removeProductInCart(name: string) {
    const cartWithRemovedProduct = cart.items.filter(
      (cartItem) => cartItem.name != name
    );

    setCart({ ...cart, items: cartWithRemovedProduct });
  }

  function createDelivery(data: CreateDeliveryData) {
    const currentCart = { ...cart };

    Object.assign(currentCart.delivery, data);

    currentCart.orderConfirmed = true;

    setCart(currentCart);
  }

  useEffect(() => {
    const accumulatedPrice = calculateOrderPrice();

    setCart({ ...cart, orderPrice: accumulatedPrice });
  }, [cart.items, cart.orderPrice]);

  return (
    <CartContext.Provider
      value={{
        cart,
        storeProductInCart,
        changeQuantityProduct,
        removeProductInCart,
        createDelivery,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
