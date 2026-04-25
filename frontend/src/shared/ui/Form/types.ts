import { FormHTMLAttributes, ReactNode } from "react";
import { Theme } from "@emotion/react";
import { SxProps } from "@mui/material";

export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children?: ReactNode;
  sx?: SxProps<Theme>;
  errorStatus?: string | null;
}
