import { combineReducers } from "@reduxjs/toolkit";

import { sessionReducer, sessionReducerPath } from "@/entities/users";

export const rootReducer = combineReducers({
  [sessionReducerPath]: sessionReducer,
});
