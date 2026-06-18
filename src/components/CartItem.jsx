import GhostButton from "./GhostButton";

function CartItem({ item, removeHandler }) {
  return (
    <article className="flex gap-4">
      <img className="h-40 w-40 object-cover" src={item.thumbnailURL} alt="" />
      <div className="flex flex-col">
        <h2 className="text-xl font-semibold">{item.title}</h2>
        <p>
          {item.qty} unit{item.multiple && "s"}
        </p>
        <p className="currency">{item.subtotalString}</p>
        <div className="flex grow items-end">
          <GhostButton label="Remove" handler={removeHandler} />
        </div>
      </div>
    </article>
  );
}

export default CartItem;
