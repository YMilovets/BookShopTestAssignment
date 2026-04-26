import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { setSortingAtQuery, setSortingByQuery } from "@/entities/books";

export default function useBooksParams() {
  const sortBy = useAppSelector((state) => state.sortingReducer.sortBy);
  const sortAt = useAppSelector((state) => state.sortingReducer.sortAt);

  const dispatch = useAppDispatch();

  const params = new Map();
  if (sortAt !== 0 && sortBy) {
    params.set("sortBy", sortBy);
    params.set("sortAt", sortAt);
  }

  const handleSortByQuery = (column: string) => {
    dispatch(setSortingByQuery(column));
  };

  const handleSortAtQuery = (order: number) => {
    dispatch(setSortingAtQuery(order));
  };

  return {
    sortAt,
    sortBy,
    params,
    handleSortByQuery,
    handleSortAtQuery,
  };
}
