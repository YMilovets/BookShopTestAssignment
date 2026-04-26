import { Edit } from "@mui/icons-material";
import { Button, Paper } from "@mui/material";
import { Link } from "react-router";

import { useAppSelector } from "@/app/hooks";

import { ControlProps } from "./types";

function Control({ children }: ControlProps) {
  const role = useAppSelector((state) => state.sessionReducer.role);
  const isAccess = role === "admin";

  return (
    <Paper sx={{ display: "flex" }}>
      {isAccess && (
        <Button
          component={Link}
          aria-label="Редактировать"
          title="Редактировать запись"
          to="edit"
          sx={{ gap: 1 }}
        >
          <Edit color="primary" sx={{ width: 16 }} fontSize="small" />
          Редактировать
        </Button>
      )}
      {children}
    </Paper>
  );
}

export default Control;
