import { useParams } from "react-router";

import { useAppSelector } from "@/app/hooks";
import { BooksRequests, useGetBooksQuery } from "@/entities/books";

export default function useBooks() {
  const sortBy = useAppSelector((state) => state.sortingReducer.sortBy);
  const sortAt = useAppSelector((state) => state.sortingReducer.sortAt);

  const params = new Map();
  if (sortAt !== 0 && sortBy) {
    params.set("sortBy", sortBy);
    params.set("sortAt", sortAt);
  }

  const orderList: Record<number, BooksRequests["order"]> = {
    [-1]: "desc",
    1: "asc",
  };

  const booksParams: BooksRequests = {
    order: sortBy ? orderList[sortAt] : undefined,
  };

  if (sortBy) {
    booksParams["sort"] = sortBy as BooksRequests["sort"];
  }

  const { data = [], isLoading, isError } = useGetBooksQuery(booksParams);
  const { id: bookId } = useParams();

  const selectedBook = data.find(({ id }) => bookId === id);
  const isEmptyBooks = data.length === 0 && !isLoading;

  return { selectedBook, isLoading, isError, data, isEmptyBooks };
}
