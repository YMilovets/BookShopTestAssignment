import { Pages, PagesList, PageType } from "@/shared/config";

export default function useRoutes(): Array<PageType> {
  const pagesConfig: Record<string, string> = {
    [Pages.Books]: "Каталог",
    [Pages.New]: "Добавить книгу",
    [Pages.Logout]: "Выйти",
  };

  return PagesList.map(({ id, path, access }) => ({
    id,
    path,
    value: pagesConfig[id],
    access,
  }));
}
