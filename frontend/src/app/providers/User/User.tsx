import { useLoaderData } from "react-router";

import { useAppDispatch } from "@/app/hooks";
import { setAuthSession } from "@/entities/users";

import { UserProps } from "./types";

function User({ children }: UserProps) {
  const response = useLoaderData();
  const dispatch = useAppDispatch();

  if (response) {
    dispatch(setAuthSession(response));
  }

  return children;
}

export default User;
