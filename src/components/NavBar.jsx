function NavBar({ brandName }) {
  return (
    <header className="flex grow justify-center">
      <div className="flex grow gap-8 p-4">
        <div className="grow text-2xl font-extrabold uppercase">
          {brandName}
        </div>
        <div>
          cart<span className="font-bold">1</span>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
