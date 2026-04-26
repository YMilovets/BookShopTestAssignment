import { ACCEPTABLE_CHARS_EXP } from "./constants";

export function validateForm({
  name,
  description,
  id,
  onFocus,
  isValidateId = false,
}: Partial<{
  name: string;
  description: string;
  isValidateId: boolean;
  id: string;
  onFocus: (fieldName: string) => void;
}>) {
  if (!name) {
    onFocus?.("name");
    throw new Error("Название книги не может быть пустым");
  }

  if (!name?.match(ACCEPTABLE_CHARS_EXP)?.[0]) {
    onFocus?.("name");
    throw new Error(
      "Название книги должно состоять только из кириллицы, латиницы и знаков препинания",
    );
  }

  if (!description) {
    onFocus?.("description");
    throw new Error("Описание книги не может быть пустым");
  }

  if (!description?.match(ACCEPTABLE_CHARS_EXP)?.[0]) {
    onFocus?.("description");
    throw new Error(
      "Описание книги должно состоять только из кириллицы, латиницы и знаков препинания",
    );
  }

  if (!isValidateId) {
    return { name, description, id: "" };
  }

  if (!id) {
    throw new Error("Возникла неизвестная ошибка в форме редактирования книги");
  }

  return { name, description, id };
}
