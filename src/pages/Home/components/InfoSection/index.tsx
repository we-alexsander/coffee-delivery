import { ShoppingCart, Timer, Package, Coffee } from "phosphor-react";
import coffeeImage from "../../../../assets/coffee-image.svg";

import {
  IntroContainer,
  Content,
  InfosContainer,
  ItemsContainer,
} from "./styles";
import InfoItem from "../../../../components/InfoItem";

function InfoSection() {
  return (
    <IntroContainer>
      <div className="container">
        <Content>
          <InfosContainer>
            <p>Encontre o café perfeito para qualquer hora do dia</p>
            <span>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </span>
          </InfosContainer>
          <ItemsContainer>
            <InfoItem
              icon={<ShoppingCart className="icon" size={16} weight="fill" />}
              text="Compra simples e segura"
              bgicon="yellow-dark"
            />

            <InfoItem
              icon={<Package className="icon" size={16} weight="fill" />}
              text="Embalagem mantém o café intacto"
              bgicon="base-text"
            />

            <InfoItem
              icon={<Timer className="icon" size={16} weight="fill" />}
              text="Entrega rápida e rastreada"
              bgicon="base-yellow"
            />

            <InfoItem
              icon={<Coffee className="icon" size={16} weight="fill" />}
              text="O café chega fresquinho ate você"
              bgicon="base-purple"
            />
          </ItemsContainer>
        </Content>
        <Content>
          <img src={coffeeImage} alt="Coffee Image" />
        </Content>
      </div>
    </IntroContainer>
  );
}

export default InfoSection;
