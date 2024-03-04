import { Outlet } from "react-router-dom";
import HeaderComp from "../header/HeaderComp";
import Footer from "../footer/Footer";
export default function Layout() {
  return (
    <div className="flex flex-col justify-between h-full">
      <HeaderComp />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
