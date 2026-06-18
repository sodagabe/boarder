import OrderSummaryCost from "./OrderSummaryCost";
import OrderSummaryItem from "./OrderSummaryItem";

function OrderSummary({ items, breakdown }) {
  const { itemsSubtotal, tax, shipping, total } = breakdown;
  const buildItem = (item) => {
    return <OrderSummaryItem key={item.id} item={item} />;
  };
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-xl font-semibold">Order summary</h2>
      <div className="flex flex-col gap-2">
        {items.map(buildItem)}
        <div className="flex flex-col">
          <OrderSummaryCost label="Subtotal" value={itemsSubtotal} />
          <OrderSummaryCost label="Tax" value={tax} />
          <OrderSummaryCost label="Shipping" value={shipping} />
          <OrderSummaryCost label="Total" value={total} />
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
