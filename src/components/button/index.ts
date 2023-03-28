import styled from "styled-components";
//Types
import { ButtonProps } from "./types";

export const Button = styled.button<ButtonProps>`
  border: 1px solid
    ${({ isSelected }) => (isSelected ? "transparent" : "#CAD6D1")};
  color: ${({ isSelected }) => (isSelected ? "white" : "#67887d")};
  font-size: 1rem;
  font-weight: 500;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  background-color: ${({ isSelected }) => (isSelected ? "#1DD195" : "#ffffff")};
  transition: all ease 0.2s;
  cursor: pointer;

  &:hover {
    border: 1px solid
      ${({ isSelected }) => (isSelected ? "transparent" : "#67887dd4")};
    background-color: ${({ isSelected }) =>
      isSelected ? "#1DD195" : "#f0f6f3"};
  }
`;
