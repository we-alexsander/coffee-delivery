import { styled } from "styled-components";

export const ButtonContainer = styled.button`
  width: fit-content;
  height: 2rem;
  gap: 0.25rem;
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
  border: 0;
  border-radius: 6px;
  background: ${(props) => props.theme["base-button"]};
  cursor: pointer;

  .icon {
    width: 1rem;
    height: 1rem;
    color: ${(props) => props.theme["base-purple"]};
  }

  span {
    font-family: "Roboto";
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 160%;
    color: ${(props) => props.theme["base-text"]};
  }

  &:hover {
    background: ${(props) => props.theme["base-hover"]};

    .icon {
      color: ${(props) => props.theme["purple-dark"]};
    }

    span {
      color: ${(props) => props.theme["base-subtitle"]};
    }
  }
`;
