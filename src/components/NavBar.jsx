import { NavLink } from "react-router";

function NavBar({ brandName, cartQty }) {
  return (
    <header className="flex h-20 grow justify-center">
      <div className="flex h-full grow items-center gap-8 p-4">
        <div className="grow text-2xl font-extrabold uppercase">
          <span className="h-full">
            <NavLink to={"/"}>{brandName}</NavLink>
          </span>
        </div>
        <NavLink to="/cart">
          <div className="flex h-full items-center gap-2">
            <span>Cart</span>
            {cartQty > 0 && (
              <span className="rounded-sm bg-black px-2 py-1 font-bold text-white">
                {cartQty}
              </span>
            )}
          </div>
        </NavLink>
      </div>
    </header>
  );
}

export default NavBar;
