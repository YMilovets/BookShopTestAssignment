import { Box, SxProps, Theme } from "@mui/material";

import { BooksSort } from "@/features/books";

import BooksCatalog from "./BooksCatalog";

const styles: SxProps<Theme> = {
  display: "grid",
  alignItems: "flex-start",
  justifyContent: "space-between",
  padding: "7.5em 3.75em",
  gridTemplateColumns: "1fr",
  gap: 5,
};

function Books() {
  return (
    <Box sx={styles} component="section">
      <BooksSort />
      <BooksCatalog />
    </Box>
  );
}

export default Books;
