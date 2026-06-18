import { useContext } from "react";
import CartContext from "../context/CartContext";
import CartTotal from "./CartTotal";
import CartItemListContainer from "./CartItemListContainer";
import EmptyCart from "./EmptyCart";
import { useNavigate } from "react-router";

function CartContainer() {
  const { getCartQty, getTotalBreakdown } = useContext(CartContext);
  const cartQty = getCartQty();
  const { itemsSubtotal, tax, shipping, total } = getTotalBreakdown();
  const navigate = useNavigate();
  const handler = () => navigate("/checkout");
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
            buttonHandler={handler}
          />
        </>
      ) : (
        <EmptyCart />
      )}
    </section>
  );
}

export default CartContainer;
