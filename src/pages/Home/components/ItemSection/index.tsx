import { useContext } from "react";
import { CartContext } from "../../../../contexts/CartContext";

import { items } from "../../../../data/items";

import { Grid, GridContainer, Title } from "./styles";
import CatalogItem from "../../../../components/CatalogItem";

function ItemSection() {
  const { storeProductInCart } = useContext(CartContext);

  return (
    <GridContainer>
      <Title>Nossos cafés</Title>
      <Grid>
        {items.map((item, index) => (
          <CatalogItem key={index} item={item} onStore={storeProductInCart} />
        ))}
      </Grid>
    </GridContainer>
  );
}

export default ItemSection;
