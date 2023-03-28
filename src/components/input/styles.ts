import styled from "styled-components";

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  color: #67887d;
  font-weight: 400;
  gap: 0.5rem;
  height: 84px;
  width: 100%;

  input {
    border: 1px solid #cad6d1;
    border-radius: 0.5rem;
    width: min(500px, 100%);

    height: 52px;
    padding: 1rem;
    font-weight: 400;
    outline: none;
    transition: all ease 0.2s;

    &::placeholder {
      color: #cad6d1;
    }

    &:hover,
    &:focus {
      border: 2px solid #67887dd4;
    }
  }
`;
