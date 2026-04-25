import { Alert, Paper } from "@mui/material";

import { FormProps } from "./types";

const styles = {
  display: "grid",
  gap: "1rem",
};

function Form({ sx, children, errorStatus, onSubmit, ...props }: FormProps) {
  return (
    <Paper
      {...props}
      component="form"
      onSubmit={onSubmit}
      variant="elevation"
      sx={{ ...styles, ...sx }}
    >
      {children}
      {errorStatus ? (
        <Alert variant="outlined" severity="error">
          {errorStatus}
        </Alert>
      ) : null}
    </Paper>
  );
}

export default Form;
