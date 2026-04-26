import { Paper } from "@mui/material";

import { ControlProps } from "./types";

function Control({ children }: ControlProps) {
  return (
    <Paper sx={{ display: "flex" }}>
      {children}
    </Paper>
  );
}

export default Control;
