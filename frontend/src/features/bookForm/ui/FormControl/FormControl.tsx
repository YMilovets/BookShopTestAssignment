import { TextField, Typography } from "@mui/material";

import { FormItem } from "@/shared/config";

import { FormControlProps } from "./types";

function FormControl({ title, formData }: FormControlProps) {
  return (
    <>
      <Typography variant="h6">{title}</Typography>
      <TextField
        label="Название книги"
        name={FormItem.Name}
        helperText="Название книги не может быть пустым и должно состоять только из букв русского алфавита, букв
латинского алфавита и знаков препинания."
        defaultValue={formData?.get(FormItem.Name)}
        required
      />
      <TextField
        multiline
        rows={3}
        label="Описание книги"
        name={FormItem.Description}
        helperText="Описание книги не может быть пустым и должно состоять только из букв русского алфавита, букв
латинского алфавита и знаков препинания."
        defaultValue={formData?.get(FormItem.Description)}
        required
      />
    </>
  );
}

export default FormControl;
