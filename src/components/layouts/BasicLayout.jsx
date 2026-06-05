import Footer from "../Footer";
import NavBarContainer from "../NavBarContainer";

function BasicLayout({ children }) {
  return (
    <>
      <NavBarContainer />
      {children}
      <Footer />
    </>
  );
}

export default BasicLayout;
