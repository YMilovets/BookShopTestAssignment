import { lazy } from "react";
import { Outlet } from "react-router";

import { UserProvider } from "@/app/providers";
import { Header } from "@/widgets/header";

const Notification = lazy(
  () => import("@/widgets/notification/ui/Notification"),
);

function MainLayout() {
  return (
    <UserProvider>
      <Header />
      <main>
        <Outlet />
      </main>
      <Notification />
    </UserProvider>
  );
}

export default MainLayout;
