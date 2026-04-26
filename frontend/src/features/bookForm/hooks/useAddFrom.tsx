import { FormEventHandler, useState } from "react";
import { useNavigate } from "react-router";

import { useAppDispatch } from "@/app/hooks";
import { usePostBookMutation } from "@/entities/books";
import { setNotification } from "@/entities/notification";
import { Pages } from "@/shared/config";

import { validateForm } from "./utils";

export default function useAddForm() {
  const [triggerSend, { isSuccess }] = usePostBookMutation();
  const dispatch = useAppDispatch();
  const redirect = useNavigate();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name")?.toString().trim();
    const description = formData.get("description")?.toString().trim();

    try {
      const { description: validateDescription, name: validateName } =
        validateForm({
          name,
          description,
          onFocus: (fieldName: string) => {
            e.currentTarget
              .querySelector<HTMLInputElement>(`[name = "${fieldName}"]`)
              ?.focus();
          },
        });

      const { error: serverError } = await triggerSend({
        name: validateName,
        description: validateDescription,
      });

      if (serverError) {
        throw serverError;
      }

      dispatch(
        setNotification({
          isOpen: true,
          message: `Книга ${name} была успешно добавлена в каталог`,
        }),
      );

      redirect(`/${Pages.Books}`);
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return {
    error,
    isSuccess,
    handleSubmit,
  };
}
