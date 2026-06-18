import { NavLink } from "react-router";
import useCart from "../hooks/useCart";

function Header() {
  const { getCartQty } = useCart();
  const cartQty = getCartQty();
  const typographicLogo = "boarder";

  return (
    <header className="flex h-20 w-full justify-center shadow-lg">
      <div className="flex max-w-7xl grow items-center p-4">
        <div className="grow text-2xl font-extrabold uppercase">
          <span className="text-primary-500">
            <NavLink to={"/"}>{typographicLogo}</NavLink>
          </span>
        </div>
        <NavLink to="/cart" className="flex h-full items-center px-2">
          <div className="flex items-center gap-2">
            <span className={cartQty > 0 && "font-semibold"}>Cart</span>
            {cartQty > 0 && (
              <span className="bg-primary-500 rounded-sm px-2 py-1 font-bold text-white">
                {cartQty}
              </span>
            )}
          </div>
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
