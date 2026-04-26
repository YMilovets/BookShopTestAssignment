import { Box, FormControl, MenuItem, Paper } from "@mui/material";

import SortMode from "../SortMode";
import SortSelect from "../SortSelect";

function BooksSort() {
  return (
    <Box sx={{ display: "flex", gap: 1 }}>
      <FormControl sx={{ width: "100%" }}>
        <Paper>
          <SortSelect>
            <MenuItem value="">Нет</MenuItem>
            <MenuItem value="name">По названию</MenuItem>
            <MenuItem value="created_at">По дате публикации</MenuItem>
          </SortSelect>
        </Paper>
      </FormControl>
      <FormControl sx={{ display: "flex" }}>
        <Paper sx={{ display: "flex", flex: 1 }}>
          <SortMode />
        </Paper>
      </FormControl>
    </Box>
  );
}

export default BooksSort;
