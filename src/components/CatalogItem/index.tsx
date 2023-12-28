import { useState } from "react";
import { ShoppingCartSimple } from "phosphor-react";

import { BuyingGroup, Card, TagsGroup } from "./styles";
import QuantityButton from "../QuantityButton";

import { ItemType } from "../../types/ItemType";
import { CartItemType } from "../../types/CartItemType";

type ItemProps = {
  item: ItemType;
  onStore: (data: CartItemType) => void;
};

function CatalogItem({ item, onStore }: ItemProps) {
  const [quantity, setQuantity] = useState<number>(1);

  function handleQuantityChange(selectedQuantity: number) {
    setQuantity(selectedQuantity);
  }

  function handleStoreProductInCart() {
    const cartItem: CartItemType = {
      name: item.name,
      image: item.image,
      price: item.price,
      quantity,
    };

    setQuantity(1);

    onStore(cartItem);
  }

  return (
    <Card>
      <img src={item.image} />
      <TagsGroup>
        {item.tags.map((tag, index) => (
          <span className="tag" key={index}>
            {tag}
          </span>
        ))}
      </TagsGroup>

      <p className="title">{item.name}</p>
      <span className="description">{item.description}</span>
      <BuyingGroup>
        <div className="price">
          <span>R$ &nbsp;</span>
          <p>{item.price}</p>
        </div>
        <QuantityButton
          currentQuantity={quantity}
          onChangeQuantity={handleQuantityChange}
        />
        <button className="cart" onClick={handleStoreProductInCart}>
          <ShoppingCartSimple weight="fill" size={22} />
        </button>
      </BuyingGroup>
    </Card>
  );
}

export default CatalogItem;
