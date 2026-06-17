function CartItem({ item }) {
  return (
    <article className="flex h-48 gap-4 rounded-xl bg-orange-50 p-4">
      <div className="w-40 object-cover">
        <img
          className="h-full w-full object-cover"
          src={item.thumbnailURL}
          alt=""
        />
      </div>
      <div>
        <h2 className="text-xl font-semibold">{item.title}</h2>
        <p>{item.ppu}</p>
        <p>
          {item.qty} unit{item.qty > 1 && "s"}
        </p>
      </div>
    </article>
  );
}

export default CartItem;
