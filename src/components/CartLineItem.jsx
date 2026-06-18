function CartLineItem({ label, value }) {
  return (
    <div className="flex w-full border-b border-gray-200 py-4 first:pt-0 last:border-b-0 last:font-semibold">
      <span className="grow">{label}</span>
      <span className="currency">{value}</span>
    </div>
  );
}

export default CartLineItem;
