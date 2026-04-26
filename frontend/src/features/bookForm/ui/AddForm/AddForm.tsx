import SendIcon from "@mui/icons-material/Send";
import { Alert, Button } from "@mui/material";

import { Form } from "@/shared/ui";

import { useAddForm } from "../../hooks";

import { containerStyle } from "./constants";
import { AddFormProps } from "./types";

function AddForm({ children }: AddFormProps) {
  const { error, handleSubmit } = useAddForm();

  return (
    <Form onSubmit={handleSubmit} sx={containerStyle}>
      {children}
      <Button
        sx={{ borderRadius: 2 }}
        endIcon={<SendIcon />}
        size="large"
        variant="contained"
        type="submit"
      >
        Опубликовать книгу
      </Button>
      {error && (
        <Alert variant="outlined" severity="error">
          {error}
        </Alert>
      )}
    </Form>
  );
}

export default AddForm;
