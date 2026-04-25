import axios from "axios";
import { LoaderFunctionArgs, redirect } from "react-router";

import { Pages } from "@/shared/config";

import { getApiURL } from "../utils";

export default async function getLoader({
  request: { url },
}: LoaderFunctionArgs) {
  const parseURL = new URL(url);
  const ME_PATH = "me";

  try {
    axios.defaults.baseURL = getApiURL();
    const { data } = await axios.get(ME_PATH);
    return data;
  } catch {
    if (parseURL.pathname.replace("/", "") !== Pages.Login) {
      throw redirect(`/${Pages.Login}`);
    }
  }
}
