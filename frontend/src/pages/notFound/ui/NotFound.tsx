import { Theme } from "@emotion/react";
import { SxProps } from "@mui/material";
import { Box } from "@mui/system";

import { AlertError } from "@/shared/ui";

const styles: SxProps<Theme> = {
  display: "grid",
  alignItems: "flex-start",
  justifyContent: "space-between",
  gridTemplateColumns: "1fr",
  padding: "7.5em 3.75em",
};

function NotFound() {
  return (
    <Box sx={styles}>
      <AlertError>Страница на найдена!</AlertError>
    </Box>
  );
}

export default NotFound;
