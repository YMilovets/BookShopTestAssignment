import { Button } from "@mui/material";
import { Link, useLocation } from "react-router";

import { ButtonLinkProps } from "./types";

function ButtonLink({ children, path, ...props }: ButtonLinkProps) {
  const { pathname } = useLocation();

  const isCurrent = pathname === path;

  return (
    <Button
      {...props}
      variant={isCurrent ? "outlined" : "text"}
      LinkComponent={Link}
      component={Link}
      to={path}
      sx={{
        padding: "6px 15px",
      }}
    >
      {children}
    </Button>
  );
}

export default ButtonLink;
