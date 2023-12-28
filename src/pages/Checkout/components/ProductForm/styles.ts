import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 28rem;
  height: fit-content;
  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px 44px;

  @media screen and (max-width: 480px) {
    & {
      border-radius: 6px;
    }
  }
`;

export const Card = styled.div`
  width: 23rem;
  height: fit-content;
  margin: 1.25rem auto;

  hr {
    margin: 1.5rem 0;
    border: 1px solid ${(props) => props.theme["base-button"]};
  }

  .full-infos {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-bottom: 1.5rem;

    .infos {
      display: flex;
      justify-content: space-between;

      .info-text,
      .info-price {
        font-family: "Roboto";
        line-height: 130%;
        color: ${(props) => props.theme["base-text"]};
      }

      .info-text {
        font-size: 0.875rem;
        font-weight: 400;
      }

      .info-text.last,
      .info-price.last {
        font-size: 1.25rem;
        font-weight: 700;
        color: ${(props) => props.theme["base-subtitle"]};
      }

      .info-price {
        font-size: 1rem;
        font-weight: 400;
      }
    }
  }

  .button-confirm {
    width: 100%;
    padding: 0.75rem 0;
    text-align: center;
    border: 0;
    border-radius: 6px;
    cursor: pointer;

    background: ${(props) => props.theme["base-yellow"]};
    color: ${(props) => props.theme["base-white"]};

    font-family: "Roboto";
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 130%;
  }
`;

export const Item = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-around;
  padding: 0.5rem 0;
  gap: 3.125rem;

  .specifications {
    display: flex;
    gap: 1.25rem;

    img {
      width: 4rem;
      height: 4rem;
    }

    .infos {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      .title {
        font-family: "Roboto";
        font-size: 1rem;
        line-height: 130%;
        font-weight: 400;
        color: ${(props) => props.theme["base-subtitle"]};
      }

      .button-group {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 0.5rem;

        button {
          height: 2rem;

          display: flex;
          align-items: center;

          padding: 0 0.5rem;

          border: 0;
          border-radius: 6px;
          background: ${(props) => props.theme["base-button"]};

          .icon {
            cursor: pointer;
            width: 0.875rem;
            height: 0.875rem;
            color: ${(props) => props.theme["base-purple"]};

            &:hover {
              color: ${(props) => props.theme["purple-dark"]};
              font-weight: bold;
            }
          }

          .number {
            width: 1.25rem;
            font-family: "Roboto";
            font-weight: 400;
            font-size: 1rem;
            line-height: 160%;
            color: ${(props) => props.theme["base-title"]};
            margin: 0 0.25rem;
          }

          .text {
            font-family: "Roboto";
            font-size: 0.75rem;
            line-height: 130%;
            font-weight: 400;
            color: ${(props) => props.theme["base-text"]};
            margin: 0 0.25rem;
          }
        }
      }
    }
  }

  .price {
    font-family: "Roboto";
    font-size: 1rem;
    font-weight: 700;
    line-height: 130%;
    color: ${(props) => props.theme["base-text"]};
  }
`;
