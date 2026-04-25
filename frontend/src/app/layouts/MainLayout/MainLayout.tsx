import { Outlet } from "react-router";

import { UserProvider } from "@/app/providers";
import { Header } from "@/widgets/header";

function MainLayout() {
  return (
    <UserProvider>
      <Header />
      <main>
        <Outlet />
      </main>
    </UserProvider>
  );
}

export default MainLayout;
