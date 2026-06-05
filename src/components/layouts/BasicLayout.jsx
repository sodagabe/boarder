import { Outlet } from "react-router";
import Footer from "../Footer";
import NavBarContainer from "../NavBarContainer";

function BasicLayout() {
  return (
    <>
      <NavBarContainer />
      <Outlet />
      <Footer />
    </>
  );
}

export default BasicLayout;
