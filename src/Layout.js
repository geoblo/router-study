import React from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <header style={{ background: "gray", padding: 16, fontSize: 24 }}>
        header
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
