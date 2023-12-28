import { styled } from "styled-components";

export const Container = styled.div`
  width: 4.5rem;
  height: auto;
  gap: 0.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme["base-button"]};
  border-radius: 6px;

  button {
    width: 0.875rem;
    height: 0.875rem;
    border: 0;
    outline: none;
    cursor: pointer;

    background: transparent;
    color: ${(props) => props.theme["base-purple"]};

    &:hover {
      color: ${(props) => props.theme["purple-dark"]};
    }
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    width: 1.25rem;
    font-family: "Roboto";
    font-size: 1rem;
    font-weight: 400;
    line-height: 130%;
    text-align: center;
    border: 0;
    outline: none;
    background: transparent;
    pointer-events: none;
    /* -moz-appearance: textfield; */
  }
`;
