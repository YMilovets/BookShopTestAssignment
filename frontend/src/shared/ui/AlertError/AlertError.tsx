import { Alert, AlertTitle } from "@mui/material";

import { AlertErrorProps } from "./types";

function AlertError({ title = "Ошибка", children }: AlertErrorProps) {
  return (
    <Alert severity="error" variant="outlined" sx={{ alignItems: "center" }}>
      <AlertTitle>{title}</AlertTitle>
      {children}
    </Alert>
  );
}

export default AlertError;
