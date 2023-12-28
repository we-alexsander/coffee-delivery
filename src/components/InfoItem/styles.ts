import { styled } from "styled-components";

interface ItemProps {
  bgicon: string;
}

export const Item = styled.div<ItemProps>`
  width: auto;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  .icon {
    width: 2rem;
    height: 2rem;
    padding: 0.5rem;
    border-radius: 50%;
    color: ${(props) => props.theme["base-background"]};
    background: ${(props) => props.theme[props.bgicon]};
  }

  span {
    color: ${(props) => props.theme["base-text"]};
    font-family: "Roboto";
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
  }

  @media screen and (max-width: 480px) {
    & {
      width: 300px;
      display: flex;
      margin: 5px auto;
    }
  }
`;
