//Styles
import { StyledLabel } from "./styles";

//Types
import { InputProps } from "./types";

export function Input({ label, ...rest }: InputProps) {
  return (
    <StyledLabel>
      <span>{label}</span>
      <input {...rest} />
    </StyledLabel>
  );
}
