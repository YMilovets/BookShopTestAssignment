import { Theme } from "@emotion/react";
import { SxProps } from "@mui/material";

export const initialState = {
  data: { message: "" },
  error: null,
};

export const containerStyle: SxProps<Theme> = {
  borderRadius: 3,
  display: "grid",
  gap: 2,
  padding: 2.5,
  minWidth: "40em",
};
