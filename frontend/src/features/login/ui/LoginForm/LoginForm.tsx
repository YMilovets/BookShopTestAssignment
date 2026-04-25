import { useActionState } from "react";
import { Alert } from "@mui/material";
import axios from "axios";
import { Navigate } from "react-router";

import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { setAuthSession } from "@/entities/users";
import { Pages } from "@/shared/config";
import { Form } from "@/shared/ui";

import { initialState } from "./constants";
import useCorrectCookies from "./hooks";
import { LoginFormProps } from "./types";

function LoginForm({ children, ...props }: LoginFormProps) {
  const dispatch = useAppDispatch();
  const login = useAppSelector((state) => state.sessionReducer.login);
  const { isCorrectCookiesURL } = useCorrectCookies(login);

  const handleSubmit = async (_: unknown, formData: FormData) => {
    try {
      const { data } = await axios.post("auth/user", {
        login: formData.get("username"),
        password: formData.get("password"),
      });

      dispatch(setAuthSession(data));
      return { data };
    } catch {
      return {
        error: "Пользователь с указанным логином и/или паролем не найден!",
        data: null,
      };
    }
  };

  const [{ error }, handleAction] = useActionState(handleSubmit, initialState);

  if (login && isCorrectCookiesURL) return <Navigate to={`/${Pages.Books}`} />;

  return (
    <Form
      sx={{ padding: 2.5, borderRadius: 3 }}
      action={handleAction}
      {...props}
    >
      {children}
      {error && (
        <Alert variant="outlined" severity="error">
          {error}
        </Alert>
      )}
    </Form>
  );
}

export default LoginForm;
