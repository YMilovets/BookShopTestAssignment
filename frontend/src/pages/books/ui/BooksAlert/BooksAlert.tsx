import { Alert, AlertTitle } from "@mui/material";

import { BooksAlertProps } from "./types";

function BooksAlert({ children }: BooksAlertProps) {
  return (
    <Alert severity="error" variant="outlined" sx={{ alignItems: "center" }}>
      <AlertTitle>Ошибка</AlertTitle>
      {children}
    </Alert>
  );
}

export default BooksAlert;
