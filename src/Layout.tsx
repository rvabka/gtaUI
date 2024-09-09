import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";

export default function Layout() {
  return (
    <main className="p-6 ">
      <Nav />
      <Outlet />
    </main>
  );
}
