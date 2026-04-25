import { Theme } from "@emotion/react";
import { Box, SxProps, Typography } from "@mui/material";

import { LoginForm, LoginFormControl } from "@/features/login";

const sectionStyle: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
};

function Login() {
  return (
    <Box sx={sectionStyle} component="section">
      <LoginForm>
        <Typography variant="h6">Форма авторизации</Typography>
        <LoginFormControl />
      </LoginForm>
    </Box>
  );
}

export default Login;
