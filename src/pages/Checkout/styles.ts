import { styled } from "styled-components";

export const FormContainer = styled.form`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding-bottom: 15rem;

  @media screen and (max-width: 1024px) {
    & {
      flex-direction: column;
      align-items: center;
    }
  }
`;
