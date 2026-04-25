import { Person2 } from "@mui/icons-material";
import { Typography } from "@mui/material";

import { AuthorProps } from "./types";

function Author({ children }: AuthorProps) {
  return (
    <Typography
      variant="caption"
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 0.5,
        pr: 2,
        pl: 2,
      }}
    >
      <Person2 fontSize="small" color="primary" />
      {children}
    </Typography>
  );
}

export default Author;
