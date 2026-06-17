import Button from "./Button";
import CartLineItem from "./CartLineItem";

function CartTotal({ itemsSubtotal, shipping, vat }) {
  return (
    <section className="flex h-fit w-[25%] flex-col rounded-xl bg-gray-100 p-4">
      <div className="pb-8">
        <CartLineItem label="Items" value={itemsSubtotal} />
        <CartLineItem label="Tax" value={vat} />
        <CartLineItem label="Shipping" value={shipping} border={false} />
      </div>
      <Button label="Checkout" fullWidth={true} />
    </section>
  );
}

export default CartTotal;
