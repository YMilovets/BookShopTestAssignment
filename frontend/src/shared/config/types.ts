import { UserRole } from "@/entities/users";

import { Pages } from "./pages";

export type PageType = {
  id: Pages;
  value: string;
  path?: string;
  access?: UserRole;
};
