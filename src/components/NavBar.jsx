function NavBar({ brandName, cartQty }) {
  return (
    <header className="flex grow justify-center">
      <div className="flex grow gap-8 p-4">
        <div className="grow text-2xl font-extrabold uppercase">
          {brandName}
        </div>
        <div className="flex gap-1">
          <span>Cart</span>
          <span className="font-bold">{cartQty}</span>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
