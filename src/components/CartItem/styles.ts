import { styled } from "styled-components";

export const Item = styled.div`
  width: 23rem;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0.25rem;
  background: ${(props) => props.theme["base-card"]};
  border-bottom: 1px solid ${(props) => props.theme["base-button"]};
  margin-bottom: 1.5rem;

  img {
    width: 64px;
    height: 64px;
  }

  .infos {
    display: flex;
    gap: 1.25rem;

    .infos-details {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
  }

  .item-title {
    font-family: "Roboto";
    font-size: 1rem;
    line-height: 130%;
    font-weight: 400;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  .action-buttons {
    width: fit-content;
    height: fit-content;
    display: flex;
    gap: 0.5rem;
  }

  .item-price {
    font-family: "Roboto";
    font-size: 1rem;
    font-weight: 700;
    line-height: 130%;
    color: ${(props) => props.theme["base-text"]};
  }
`;
