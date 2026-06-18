import { NavLink } from "react-router";

function FocusHeader() {
  return (
    <header className="flex h-20 w-full justify-center">
      <div className="flex grow items-center justify-center text-2xl font-extrabold uppercase lg:max-w-7xl">
        <span>
          <NavLink to={"/"}>boarder</NavLink>
        </span>
      </div>
    </header>
  );
}

export default FocusHeader;
