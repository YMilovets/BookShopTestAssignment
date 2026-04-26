import { lazy } from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import { loader } from "@/pages/home";
import { loader as logoutLoader } from "@/pages/logout";
import { loader as rootLoader } from "@/shared/api";
import { Pages } from "@/shared/config";

const AccessControl = lazy(() => import("@/features/session/ui/AccessControl"));
const Add = lazy(() => import("@/pages/new/ui/Add"));
const Edit = lazy(() => import("@/pages/edit/ui/Edit"));

import { Books } from "@/pages/books";

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
        path: Pages.Login,
        lazy: () =>
          import("@/pages/login").then((module) => ({
            Component: module.Login,
          })),
      },
      {
        path: Pages.Books,
        element: <Books />,
      },
      {
        path: `${Pages.Books}/:id`,
        lazy: () =>
          import("@/pages/book").then((module) => ({
            Component: module.Book,
          })),
      },
      {
        path: `${Pages.Books}/:id/edit`,
        element: (
          <AccessControl>
            <Edit />
          </AccessControl>
        ),
      },
      {
        path: Pages.Main,
        loader,
      },
      {
        path: Pages.Logout,
        loader: logoutLoader,
      },
      {
        path: Pages.New,
        element: (
          <AccessControl>
            <Add />
          </AccessControl>
        ),
      },
    ],
  },
]);

function RouterLayout() {
  return <RouterProvider router={router} />;
}

export default RouterLayout;
