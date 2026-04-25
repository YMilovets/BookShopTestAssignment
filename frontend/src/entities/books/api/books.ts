import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { getApiURL } from "@/shared/utils";

import { BOOKS_PATH } from "./constants";
import { BooksRequests, BooksResponse } from "./types";

export const {
  reducerPath: booksReducerPath,
  reducer: booksReducer,
  middleware: booksMiddleware,
  useGetBooksQuery,
} = createApi({
  reducerPath: BOOKS_PATH,
  baseQuery: fetchBaseQuery({ baseUrl: getApiURL() }),
  tagTypes: ["Books"],
  endpoints: (builder) => {
    return {
      getBooks: builder.query<Array<BooksResponse>, BooksRequests>({
        query: (params) => ({
          url: BOOKS_PATH,
          params,
        }),
        providesTags: ["Books"],
      }),
    };
  },
});
