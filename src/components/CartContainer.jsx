import { useContext } from "react";
import CartContext from "../context/CartContext";
import CartTotal from "./CartTotal";
import CartItemListContainer from "./CartItemListContainer";
import EmptyCart from "./EmptyCart";

function CartContainer() {
  const { getItemsSubtotal, getShippingFee, getVAT, getCartQty } =
    useContext(CartContext);
  const cartQty = getCartQty();
  const itemsSubtotal = getItemsSubtotal();
  const shipping = getShippingFee();
  const vat = getVAT(itemsSubtotal);
  return (
    <section className="flex gap-4">
      {cartQty ? (
        <>
          <CartItemListContainer />
          <CartTotal
            itemsSubtotal={itemsSubtotal}
            vat={vat}
            shipping={shipping}
          />
        </>
      ) : (
        <EmptyCart />
      )}
    </section>
  );
}

export default CartContainer;
