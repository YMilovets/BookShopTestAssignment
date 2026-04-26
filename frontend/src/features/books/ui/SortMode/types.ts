import { ReactNode } from "react";

export type SortedIconItemType = { icon: ReactNode; title: string };

export enum SortOrder {
  Asc = 1,
  Desc = -1,
  Default = 0,
}
