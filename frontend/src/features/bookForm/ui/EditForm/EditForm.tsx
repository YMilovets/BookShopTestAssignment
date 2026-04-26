import SendIcon from "@mui/icons-material/Send";
import { Alert, Button } from "@mui/material";
import { Link } from "react-router";

import { useBooks } from "@/entities/books";
import { FormItem } from "@/shared/config";
import { Form } from "@/shared/ui";

import { useEditForm } from "../../hooks";
import FormControl from "../FormControl";

import { containerStyle } from "./constants";

function EditForm() {
  const { error, handleSubmit } = useEditForm();

  const { selectedBook } = useBooks();
  const formValues = new Map<FormItem, string>();

  if (selectedBook?.name) {
    formValues.set(FormItem.Name, selectedBook?.name);
  }

  if (selectedBook?.description) {
    formValues.set(FormItem.Description, selectedBook?.description);
  }

  return (
    <Form onSubmit={handleSubmit} sx={containerStyle}>
      <FormControl formData={formValues} title="Редактирование записи книги" />
      <Button
        sx={{ borderRadius: 2 }}
        endIcon={<SendIcon />}
        size="large"
        variant="contained"
        type="submit"
      >
        Обновить информацию о книге
      </Button>
      <Button
        sx={{ borderRadius: 2 }}
        size="large"
        variant="outlined"
        component={Link}
        to={`/books/${selectedBook?.id}`}
      >
        Отменить
      </Button>
      {error && (
        <Alert variant="outlined" severity="error">
          {error}
        </Alert>
      )}
    </Form>
  );
}

export default EditForm;
