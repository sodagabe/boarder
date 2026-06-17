function CartLineItem({ label, value, border = true, total = false }) {
  let className = "flex py-4 w-full";
  const borderClass = border ? "border-b border-gray-200" : "";
  const totalClass = total ? "font-semibold" : "";
  return (
    <div className={`${className} ${borderClass} ${totalClass}`}>
      <span className="grow">{label}</span>
      <span className="currency">{value}</span>
    </div>
  );
}

export default CartLineItem;
