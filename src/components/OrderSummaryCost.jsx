function OrderSummaryCost({ label, value }) {
  return (
    <div
      className={`flex border-b border-gray-200 py-2 text-sm last:border-b-0 last:font-semibold`}
    >
      <span className="grow">{label}</span>
      <span className="currency">{value}</span>
    </div>
  );
}

export default OrderSummaryCost;
