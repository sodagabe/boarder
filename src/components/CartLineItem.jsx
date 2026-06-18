function CartLineItem({ label, value }) {
  return (
    <div
      className={
        "last:text-semibold flex w-full border-b border-gray-200 py-4 last:border-b-0"
      }
    >
      <span className="grow">{label}</span>
      <span className="currency">{value}</span>
    </div>
  );
}

export default CartLineItem;
