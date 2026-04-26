import { AxiosError } from "axios";
import { useNavigate } from "react-router";

import { useAppDispatch } from "@/app/hooks";
import { useBooks, useRemoveBooksMutation } from "@/entities/books";
import { setNotification } from "@/entities/notification";
import { Pages } from "@/shared/config";

export default function useRemoveBook(onClose?: () => void) {
  const { selectedBook } = useBooks();
  const redirect = useNavigate();
  const dispatch = useAppDispatch();
  const [triggerRemove] = useRemoveBooksMutation();

  const handleDelete = async () => {
    const { id } = { ...selectedBook };

    try {
      if (!id) {
        throw new Error(
          "Возникла неизвестная ошибка в форме редактирования книги",
        );
      }

      const { error: serverError } = await triggerRemove(id);
      onClose?.();

      if (serverError) {
        throw serverError;
      }

      dispatch(
        setNotification({
          isOpen: true,
          message: `Книга ${selectedBook?.name} была успешно удалена`,
        }),
      );

      redirect(`/${Pages.Books}`);
    } catch (error) {
      dispatch(
        setNotification({
          isOpen: true,
          message: (error as AxiosError).message,
        }),
      );
    }
  };

  return handleDelete;
}
