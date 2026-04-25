import { ReactNode } from "react";

export interface BooksCardProps {
  title: string;
  description?: string;
  date: string;
  moreBtnComponent?: ReactNode;
  author?: string;
}
