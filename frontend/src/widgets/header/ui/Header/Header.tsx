import { Box, Toolbar, Typography } from "@mui/material";

import { Navigation, Toolbar as ToolbarContainer } from "@/features/header";
import { ThemeControl } from "@/features/main";

function Header() {
  return (
    <ToolbarContainer>
      <Toolbar variant="regular">
        <Typography
          sx={{ mr: 3, color: "inherit", fontWeight: 500 }}
          noWrap
          variant="h5"
        >
          Books Shop
        </Typography>
        <Navigation />
        <Box sx={{ ml: "auto", display: "flex", alignItems: "center", gap: 2 }}>
          <ThemeControl />
        </Box>
      </Toolbar>
    </ToolbarContainer>
  );
}

export default Header;
