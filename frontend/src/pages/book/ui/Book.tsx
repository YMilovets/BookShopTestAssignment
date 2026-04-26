import { Box, SxProps, Theme } from "@mui/material";

import BookView from "./BookView";

const styles: SxProps<Theme> = {
  display: "grid",
  alignItems: "flex-start",
  justifyContent: "space-between",
  padding: "7.5em 3.75em",
  gridTemplateColumns: "1fr",
};

function Book() {
  return (
    <Box sx={styles} component="section">
      <BookView />
    </Box>
  );
}

export default Book;
