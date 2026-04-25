import { Theme } from "@emotion/react";
import { Alert, AlertTitle, Box, SxProps } from "@mui/material";

import { useAppSelector } from "@/app/hooks";
import { ButtonLink } from "@/features/header";
import { Pages } from "@/shared/config";

import { AccessProps } from "./types";

const styles: SxProps<Theme> = {
  display: "grid",
  alignItems: "flex-start",
  justifyContent: "space-between",
  padding: "7.5em 3.75em",
  gridTemplateColumns: "1fr",
};

function AccessControl({ children, role = "admin" }: AccessProps) {
  const currentRole = useAppSelector((state) => state.sessionReducer.role);

  if (currentRole !== role) {
    return (
      <Box sx={styles} component="section">
        <Alert
          severity="error"
          variant="outlined"
          sx={{ alignItems: "center" }}
        >
          <AlertTitle>Ошибка</AlertTitle>
          Вы не имеете доступа к данной странице
          <ButtonLink path={`/${Pages.Books}`}>Вернуться в каталог</ButtonLink>
        </Alert>
      </Box>
    );
  }
  return children;
}

export default AccessControl;
