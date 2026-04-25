import { FormHTMLAttributes, ReactNode } from "react";

export interface LoginFormProps extends FormHTMLAttributes<HTMLFormElement> {
	children?: ReactNode;
}
