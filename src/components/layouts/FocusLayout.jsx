import { Outlet } from "react-router";
import Footer from "../Footer";
import FocusHeader from "../FocusHeader";

function FocusLayout() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <FocusHeader />
      <div className="flex w-full max-w-7xl grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default FocusLayout;
