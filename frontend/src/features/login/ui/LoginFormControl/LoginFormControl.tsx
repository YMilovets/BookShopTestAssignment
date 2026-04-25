import SendIcon from "@mui/icons-material/Send";
import { Button, FormControl, FormGroup, TextField } from "@mui/material";

function SignFormControl() {
  return (
    <FormControl>
      <FormGroup sx={{ gap: 2.5 }}>
        <TextField
          name="username"
          label="Имя пользователя"
          variant="outlined"
          required
        />
        <TextField
          name="password"
          label="Пароль"
          variant="outlined"
          type="password"
          required
        />
        <Button
          sx={{ borderRadius: 2 }}
          endIcon={<SendIcon />}
          size="large"
          variant="contained"
          type="submit"
        >
          Войти в систему
        </Button>
      </FormGroup>
    </FormControl>
  );
}

export default SignFormControl;
