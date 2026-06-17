import { useContext } from "react";
import CartContext from "../context/CartContext";
import CartTotal from "./CartTotal";
import CartItemListContainer from "./CartItemListContainer";
import EmptyCart from "./EmptyCart";

function CartContainer() {
  const { getItemsSubtotal, getShippingFee, getTax, getCartQty, getTotal } =
    useContext(CartContext);
  const cartQty = getCartQty();
  const itemsSubtotal = getItemsSubtotal();
  const shipping = getShippingFee();
  const tax = getTax(itemsSubtotal);
  const total = getTotal();
  return (
    <section className="flex gap-4">
      {cartQty ? (
        <>
          <CartItemListContainer />
          <CartTotal
            itemsSubtotal={itemsSubtotal}
            tax={tax}
            shipping={shipping}
            total={total}
          />
        </>
      ) : (
        <EmptyCart />
      )}
    </section>
  );
}

export default CartContainer;
