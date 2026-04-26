import { combineReducers } from "@reduxjs/toolkit";

import { booksReducer, booksReducerPath } from "@/entities/books";
import { sortingReducer, sortingReducerPath } from "@/entities/books/model";
import {
  notificationReducer,
  notificationReducerPath,
} from "@/entities/notification";
import { sessionReducer, sessionReducerPath } from "@/entities/users";

export const rootReducer = combineReducers({
  [sessionReducerPath]: sessionReducer,
  [notificationReducerPath]: notificationReducer,
  [booksReducerPath]: booksReducer,
  [sortingReducerPath]: sortingReducer,
});
