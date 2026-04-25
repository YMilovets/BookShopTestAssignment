import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import { loader as rootLoader } from "@/shared/api";
import { Pages } from "@/shared/config";

import MainLayout from "../MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    loader: rootLoader,
    children: [
      {
        path: Pages.NotFound,
        lazy: () =>
          import("@/pages/notFound").then((module) => ({
            Component: module.NotFound,
          })),
      },
      {
        path: Pages.Main,
        element: <section>Home</section>,
      },
    ],
  },
]);

function RouterLayout() {
  return <RouterProvider router={router} />;
}

export default RouterLayout;
