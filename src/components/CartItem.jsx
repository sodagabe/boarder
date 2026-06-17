import GhostButton from "./GhostButton";

function CartItem({ item, removeHandler }) {
  return (
    <article className="flex h-48 gap-4 rounded-xl bg-orange-50 p-4">
      <div className="w-40 object-cover">
        <img
          className="h-full w-full object-cover"
          src={item.thumbnailURL}
          alt=""
        />
      </div>
      <div className="flex flex-col">
        <h2 className="text-xl font-semibold">{item.title}</h2>
        <p>
          {item.qty} unit{item.multiple && "s"}
        </p>
        <p className="currency">{item.subtotal}</p>
        <div className="flex grow items-end">
          <GhostButton label="Remove" handler={removeHandler} />
        </div>
      </div>
    </article>
  );
}

export default CartItem;
