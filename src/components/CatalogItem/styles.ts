import { styled } from "styled-components";

export const Card = styled.div`
  width: 16rem;
  height: 19.375rem;
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px 36px 6px 36px;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1.25rem;
  }

  .title {
    margin-top: 1rem;
    font-family: "Baloo 2";
    font-size: 1.25rem;
    line-height: 130%;
    font-weight: 700;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  .description {
    font-family: "Roboto";
    font-size: 0.875rem;
    line-height: 130%;
    font-weight: 400;

    text-align: center;

    color: ${(props) => props.theme["base-label"]};
    margin: 0.5rem 1.25rem 0 1.25rem;
  }
`;

export const TagsGroup = styled.div`
  width: auto;
  height: auto;
  margin-top: 0.75rem;

  display: flex;
  gap: 0.25rem;

  .tag {
    font-family: "Roboto";
    font-size: 0.625rem;
    line-height: 130%;
    font-weight: 700;

    color: ${(props) => props.theme["yellow-dark"]};
    background: ${(props) => props.theme["yellow-light"]};

    padding: 0.25rem 0.5rem;
    border-radius: 100px;
  }
`;

export const BuyingGroup = styled.div`
  width: 13rem;
  height: 2.375rem;

  margin: 2.05rem 1.5rem 1.25rem 1.5rem;

  display: flex;
  justify-content: space-between;

  .price {
    display: flex;
    align-items: center;
    margin-right: 23px;
    color: ${(props) => props.theme["base-text"]};

    span {
      font-family: "Roboto";
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 130%;
    }

    p {
      font-family: "Baloo 2";
      font-size: 1.5rem;
      font-weight: 800;
      line-height: 130%;
    }
  }

  .select {
    width: 4.5rem;
    background: ${(props) => props.theme["base-button"]};
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 6px;
    gap: 0.25rem;

    .text {
      width: 1.25rem;
      font-family: "Roboto";
      font-size: 1rem;
      line-height: 130%;
      font-weight: "400";
      text-align: center;
    }

    .more-button,
    .less-button {
      width: 0.875rem;
      height: 0.875rem;
      border: 0;
      cursor: pointer;

      background: transparent;
      color: ${(props) => props.theme["base-purple"]};

      &:hover {
        color: ${(props) => props.theme["purple-dark"]};
        font-weight: bold;
      }
    }
  }

  .cart {
    border: 0;
    border-radius: 6px;
    cursor: pointer;
    padding: 0.5rem;

    background: ${(props) => props.theme["purple-dark"]};
    color: ${(props) => props.theme["base-card"]};
  }
`;
