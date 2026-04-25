import { PageType } from "./types";

export enum Pages {
  NotFound = "*",
  Login = "login",
  Books = "books",
  New = "new",
  Edit = "edit",
  Logout = "logout",
  Main = "",
}

export const PagesList: Array<Omit<PageType, "value">> = [
  {
    id: Pages.Books,
    path: Pages.Books,
  },
  {
    id: Pages.New,
    path: Pages.New,
    access: "admin",
  },
  {
    id: Pages.Logout,
    path: Pages.Logout,
  },
];
