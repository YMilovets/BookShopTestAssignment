import { Avatar, Box, IconButton, Typography } from "@mui/material";

import { useAppSelector } from "@/app/hooks";

function UserProfile() {
  const login = useAppSelector((state) => state.sessionReducer.login);
  const role = useAppSelector((state) => state.sessionReducer.role);

  if (!login) return null;
  return (
    <>
      <IconButton
        aria-label="Профиль"
        aria-haspopup
        tabIndex={-1}
        sx={{ p: 0.5 }}
      >
        <Avatar />
      </IconButton>
      <Box sx={{ display: "grid" }}>
        <Typography sx={{ fontWeight: "bold" }}>{login}</Typography>
        <Typography variant="caption" component="span">
          {role}
        </Typography>
      </Box>
    </>
  );
}

export default UserProfile;
