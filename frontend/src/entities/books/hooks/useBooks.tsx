import { useParams } from "react-router";

import { useGetBooksQuery } from "@/entities/books";

export default function useBooks() {
  const { data = [], isLoading, isError } = useGetBooksQuery({});
  const { id: bookId } = useParams();

  const selectedBook = data.find(({ id }) => bookId === id);
  const isEmptyBooks = data.length === 0 && !isLoading;

  return { selectedBook, isLoading, isError, data, isEmptyBooks };
}
