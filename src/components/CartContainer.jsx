import { useContext } from "react";
import CartContext from "../context/CartContext";
import CartTotal from "./CartTotal";
import CartItemListContainer from "./CartItemListContainer";

function CartContainer() {
  const { getCartItems, getItemsSubtotal, getShippingFee, getVAT } =
    useContext(CartContext);
  const items = getCartItems();
  const itemsSubtotal = getItemsSubtotal();
  const shipping = getShippingFee();
  const vat = getVAT(itemsSubtotal);
  return (
    <section className="flex gap-4">
      <CartItemListContainer items={items} />
      <CartTotal itemsSubtotal={itemsSubtotal} vat={vat} shipping={shipping} />
    </section>
  );
}

export default CartContainer;
