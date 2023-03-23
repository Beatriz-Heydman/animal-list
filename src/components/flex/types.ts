export type FlexProps = {
  justifyContent?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around";
  alignItems?: "center" | "flex-start" | "flex-end";
  direction?: "column" | "row";
  gap?: string;
};
