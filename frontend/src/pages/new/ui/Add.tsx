import { Theme } from "@emotion/react";
import { SxProps } from "@mui/material";
import { Box } from "@mui/system";

import { AddForm, FormControl } from "@/features/bookForm";

const styles: SxProps<Theme> = {
  display: "grid",
  alignItems: "flex-start",
  justifyContent: "space-between",
  padding: "7.5em 3.75em",
  gridTemplateColumns: "1fr",
};

function Add() {
  return (
    <Box sx={styles}>
      <AddForm>
        <FormControl title="Форма добавления книги в каталог" />
      </AddForm>
    </Box>
  );
}

export default Add;
