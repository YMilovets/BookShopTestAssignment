import { useLoaderData } from "react-router";

import { ServerObserverProps } from "./types";

function SessionObserver({
  children,
  isAuthentificated = false,
}: ServerObserverProps) {
  const responseData = useLoaderData();

  const isHidden = !!responseData === isAuthentificated;

  if (isHidden) return null;
  return children;
}

export default SessionObserver;
