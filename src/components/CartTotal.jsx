import Button from "./Button";
import CartLineItem from "./CartLineItem";

function CartTotal({ itemsSubtotal, shipping, tax, total, buttonHandler }) {
  return (
    <section className="flex h-fit w-[25%] flex-col rounded-xl bg-gray-100 p-4">
      <div className="pb-8">
        <CartLineItem label="Items" value={itemsSubtotal} />
        <CartLineItem label="Tax" value={tax} />
        <CartLineItem label="Shipping" value={shipping} />
        <CartLineItem label="Total" value={total} />
      </div>
      <Button label="Checkout" fullWidth={true} handler={buttonHandler} />
    </section>
  );
}

export default CartTotal;
