import { Outlet } from "react-router";

import { Header } from "@/widgets/header";

function MainLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
