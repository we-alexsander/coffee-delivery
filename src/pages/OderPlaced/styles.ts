import { styled } from "styled-components";

interface DetailProps {
  bgcolor: string;
}

export const Container = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .infos {
    width: 100%;
    max-width: 70rem;
    margin-top: 5rem;
    margin-bottom: 2.5rem;

    .title {
      font-family: "Baloo 2";
      font-size: 2rem;
      font-weight: 800;
      line-height: 130%;
      color: ${(props) => props.theme["yellow-dark"]};
      margin-bottom: 0.25rem;
    }

    .subtitle {
      font-family: "Roboto";
      font-size: 1.25rem;
      font-weight: 400;
      line-height: 130%;
      color: ${(props) => props.theme["base-subtitle"]};
    }
  }

  .content {
    width: 100%;
    max-width: 70rem;
    display: flex;
    align-items: center;
    gap: 6.375rem;
  }
`;

export const OrderInformation = styled.div`
  width: 32.875rem;
  height: fit-content;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border: 1px solid transparent;
  border-radius: 6px 44px;
  /* border-image: linear-gradient() 1; */
  background: linear-gradient(#fafafa, #fafafa) padding-box,
    linear-gradient(to right, #dbac2c, #8047f8) border-box;
`;

export const Detail = styled.div<DetailProps>`
  display: flex;
  gap: 0.75rem;
  align-items: center;

  .icon {
    width: 2rem;
    height: 2rem;
    padding: 0.5rem;
    background: ${(props) => props.theme[props.bgcolor]};
    color: ${(props) => props.theme["base-background"]};
    border: 0;
    border-radius: 50%;
  }

  .info {
    font-family: "Roboto";
    font-size: 1rem;
    line-height: 130%;
    font-weight: 400;
    color: ${(props) => props.theme["base-text"]};
  }

  .info.highlighted {
    font-weight: 700;
  }
`;
