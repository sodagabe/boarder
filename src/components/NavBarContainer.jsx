import useCart from "../hooks/useCart";
import NavBar from "./NavBar";

function NavBarContainer() {
  const { getCartQty } = useCart();
  const logo = "boarder";
  const cartQty = getCartQty();
  return <NavBar brandName={logo} cartQty={cartQty} />;
}

export default NavBarContainer;
