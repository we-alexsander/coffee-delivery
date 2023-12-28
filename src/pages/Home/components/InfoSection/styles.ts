import { styled } from "styled-components";
import IntroBackground from "../../../../assets/intro-background.svg";

export const IntroContainer = styled.section`
  width: 100%;
  min-height: 34rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background: url(${IntroBackground});
  background-repeat: no-repeat;
  background-size: cover;

  .container {
    display: grid;
    grid-template-columns: auto calc(100% - 588px - 56px);
    gap: 0 3.5rem;

    width: 100%;
    max-width: 70rem;
    height: 22.5rem;

    @media screen and (max-width: 480px) {
      & {
        display: flex;
        flex-direction: column;
        gap: 0;
        height: inherit;
      }
    }
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: inherit;

  img {
    width: inherit;
    height: inherit;
  }
`;

export const InfosContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  p {
    color: ${(props) => props.theme["base-title"]};
    font-family: "Baloo 2";
    font-size: 3rem;
    font-weight: 800;
    line-height: 130%;
  }

  span {
    color: ${(props) => props.theme["base-subtitle"]};
    font-family: "Roboto";
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 130%;
  }
`;

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1.25rem 2.5rem;

  width: 35.4rem;
  height: auto;

  margin-top: 4.125rem;
  gap: 1.25rem 2.5rem;

  @media screen and (max-width: 480px) {
    & {
      width: 100%;
      gap: 0;

      display: flex;
      flex-direction: column;
      margin-top: 1rem;
    }
  }
`;
