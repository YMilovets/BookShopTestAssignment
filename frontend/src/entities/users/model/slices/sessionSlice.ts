import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { SESSION_SLICE_TITLE } from "../constants";

import { InitialStateSessionType } from "./types";

const INITIAL_STATE: InitialStateSessionType = {
  role: "noAuth",
};

export const {
  reducerPath: sessionReducerPath,
  reducer: sessionReducer,
  actions: { setAuthSession },
} = createSlice({
  name: SESSION_SLICE_TITLE,
  initialState: INITIAL_STATE,
  reducers: {
    setAuthSession: (
      state,
      { payload: { role, login } }: PayloadAction<InitialStateSessionType>,
    ) => {
      state.login = login;
      state.role = role;
    },
  },
});
