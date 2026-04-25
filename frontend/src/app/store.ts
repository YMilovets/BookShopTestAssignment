import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { booksMiddleware } from "@/entities/books";

import { rootReducer } from "./reducers";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getMiddleware) => getMiddleware().concat(booksMiddleware),
});

setupListeners(store.dispatch);
