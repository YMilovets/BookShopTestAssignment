import axios from "axios";

import { Pages } from "@/shared/config";

export default async function getLoader() {
  try {
    await axios.delete(Pages.Logout);

    location.reload();
  } catch {
    /* empty */
  }
  return null;
}
