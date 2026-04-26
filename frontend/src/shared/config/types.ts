import { Pages } from "./pages";

export type PageType = {
  id: Pages;
  value: string;
  path?: string;
  access?: UserRole;
};

export type UserRole = "admin" | "user" | "noAuth";
