import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    width: 70rem;
    height: inherit;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.5rem;
  }

  img {
    width: 5.31rem;
    height: 2.5rem;
  }

  nav {
    width: 12.8125rem;
    height: 2.5rem;
    display: flex;
    justify-content: flex-end;
    gap: 0.75rem;
  }

  @media screen and (max-width: 1024px) {
    nav {
      justify-content: flex-start;
    }
  }
`;
