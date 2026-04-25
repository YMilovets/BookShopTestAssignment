import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { NOTIFICATION_TITLE } from "../constants";

import { InitialStateNotification } from "./types";

export const {
  reducerPath: notificationReducerPath,
  reducer: notificationReducer,
  actions: { setNotification },
} = createSlice({
  name: NOTIFICATION_TITLE,
  initialState: {
    isOpen: false,
    message: "",
  },
  reducers: {
    setNotification: (
      state,
      { payload: { isOpen, message } }: PayloadAction<InitialStateNotification>,
    ) => {
      state.isOpen = isOpen;
      state.message = message;
    },
  },
});
