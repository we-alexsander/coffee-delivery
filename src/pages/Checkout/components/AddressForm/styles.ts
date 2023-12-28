import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 40rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  gap: 0.5rem;

  & > div p {
    font-family: "Roboto";
    font-size: 1rem;
    font-weight: 400;
    line-height: 130%;
    margin-bottom: 2px;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  & > div span {
    font-family: "Roboto";
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const Card = styled.div`
  width: 100%;
  background: ${(props) => props.theme["base-card"]};
  display: flex;
  border-radius: 6px;

  .content {
    width: 35rem;
    margin: 2.5rem;
  }
`;

export const InputGroup = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input[type="text"] {
    width: 100%;
    font-family: "Roboto";
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 130%;

    padding: 0.75rem;
    border: 1px solid ${(props) => props.theme["base-button"]};
    outline: 0;
    border-radius: 4px;

    background: ${(props) => props.theme["base-input"]};
    color: ${(props) => props.theme["base-label"]};

    &.error,
    &:focus.error {
      border: 1px solid #d8000c;
    }

    &:focus,
    &:not(:placeholder-shown) {
      border: 1px solid ${(props) => props.theme["yellow-dark"]};
    }
  }

  .input-group {
    display: flex;
    gap: 0.75rem;
    align-items: center;
  }

  .input-200 {
    max-width: 12.5rem;
  }

  .input-60 {
    max-width: 3.75rem;
  }
`;

export const ButtonGroup = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;

  button {
    border: 1px solid transparent;
    border-radius: 6px;

    padding: 1rem;
    gap: 0.75rem;

    display: flex;
    background: ${(props) => props.theme["base-button"]};
    cursor: pointer;

    span {
      font-family: "Roboto";
      font-size: 0.75rem;
      font-weight: 400;
      line-height: 160%;
      color: ${(props) => props.theme["base-text"]};
    }

    &:hover {
      background: ${(props) => props.theme["base-hover"]};
    }

    &.active {
      background: ${(props) => props.theme["purple-light"]};
      border: 1px solid ${(props) => props.theme["base-purple"]};
    }
  }

  @media screen and (max-width: 480px) {
    & {
      grid-template-columns: revert;
    }
  }
`;
