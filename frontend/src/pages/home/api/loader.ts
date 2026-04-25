import { redirect } from "react-router";

import { Pages } from "@/shared/config";

export default function getLoader() {
  return redirect(`/${Pages.Books}`);
}
