import { combineReducers } from "@reduxjs/toolkit";

import {
  notificationReducer,
  notificationReducerPath,
} from "@/entities/notification";
import { sessionReducer, sessionReducerPath } from "@/entities/users";

export const rootReducer = combineReducers({
  [sessionReducerPath]: sessionReducer,
  [notificationReducerPath]: notificationReducer,
});
