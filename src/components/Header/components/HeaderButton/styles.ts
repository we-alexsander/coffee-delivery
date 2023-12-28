import { styled } from "styled-components";

interface ButtonProps {
  background: string;
  color: string;
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  border: 0;
  border-radius: 6px;
  padding: 0.5rem;
  gap: 0.25rem;
  background: ${(props) => props.theme[props.background]};
  color: ${(props) => props.theme[props.color]};
  position: relative;

  span {
    font-family: "Roboto";
    font-size: 0.875rem;
    line-height: 130%;
    font-weight: 400;
  }

  .items-cart {
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    right: -0.5rem;
    bottom: 1.625rem;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${(props) => props.theme["yellow-dark"]};
    color: ${(props) => props.theme["base-white"]};

    font-family: "Roboto";
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 130%;

    border-radius: 50%;
  }
`;
