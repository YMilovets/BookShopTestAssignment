import { Provider as ReduxProvider } from "react-redux";

import { store } from "@/app/store";

import { ReduxProps } from "./types";

function Redux({ children }: ReduxProps) {
  return <ReduxProvider store={store}>{children}</ReduxProvider>;
}

export default Redux;
