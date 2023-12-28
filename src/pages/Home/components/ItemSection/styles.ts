import { styled } from "styled-components";

export const GridContainer = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Grid = styled.div`
  width: 100%;
  max-width: 70rem;

  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem 2rem;
  padding-bottom: 10rem;

  @media screen and (max-width: 1200px) {
    & {
      justify-content: center;
    }
  }
`;

export const Title = styled.p`
  width: 100%;
  max-width: 70rem;

  font-family: "Baloo 2";
  font-size: 2rem;
  line-height: 130%;
  font-weight: 800;
  margin-top: 2rem;
  margin-bottom: 3.375rem;

  @media screen and (max-width: 1200px) {
    & {
      text-align: center;
    }
  }
`;
