function CartLineItem({ label, value, border = true, total = false }) {
  return (
    <div
      className={`flex w-full ${border && "border-b border-gray-200"} ${total && "font-semibold"} py-4`}
    >
      <span className="grow">{label}</span>
      <span>{value}</span>
    </div>
  );
}

export default CartLineItem;
