import { Outlet } from "react-router";
import Header from "../Header";
import Footer from "../Footer";

function BasicLayout() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <Header />
      <div className="flex w-full max-w-7xl grow p-4">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default BasicLayout;
