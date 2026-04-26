import { Theme } from "@emotion/react";
import { SxProps } from "@mui/material";
import { Box } from "@mui/system";

import { EditForm } from "@/features/bookForm";

const styles: SxProps<Theme> = {
  display: "grid",
  alignItems: "flex-start",
  justifyContent: "space-between",
  padding: "7.5em 3.75em",
  gridTemplateColumns: "1fr",
};

function Edit() {
  return (
    <Box sx={styles}>
      <EditForm />
    </Box>
  );
}

export default Edit;
