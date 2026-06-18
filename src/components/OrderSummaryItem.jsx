function OrderSummaryItem({ item }) {
  const { title, qty, thumbnailURL, subtotal, multiple } = item;
  return (
    <article className="flex h-min">
      <img className="h-22 w-22 object-cover" src={thumbnailURL} alt="" />
      <div className="flex flex-col justify-center px-3">
        <p className="font-semibold">{title}</p>
        <div className="text-sm">
          <p>
            {qty} unit{multiple && "s"}
          </p>
          <p className="currency">{subtotal}</p>
        </div>
      </div>
    </article>
  );
}

export default OrderSummaryItem;
