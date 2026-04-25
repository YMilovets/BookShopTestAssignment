import { useEffect } from "react";

import { useAppDispatch } from "@/app/hooks";
import { setNotification } from "@/entities/notification";

export default function useCorrectCookies(login?: string) {
  const dispatch = useAppDispatch();

  const isCorrectCookiesURL =
    import.meta.env.VITE_API_URL === globalThis.location.origin;

  useEffect(() => {
    if (login && !isCorrectCookiesURL) {
      dispatch(
        setNotification({
          isOpen: true,
          message:
            "Не удалось авторизовать пользователя, возникла проблема при попытке подключения к API",
        }),
      );
    }

    if (login && isCorrectCookiesURL) {
      dispatch(
        setNotification({
          isOpen: true,
          message: `Пользователь ${login} был успешно авторизован на сайте Book Shop`,
        }),
      );
    }
  }, [isCorrectCookiesURL, login]);

  return { isCorrectCookiesURL };
}
