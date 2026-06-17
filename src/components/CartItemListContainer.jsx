import { useContext } from "react";
import CartItem from "./CartItem";
import CartContext from "../context/CartContext";
import GhostButton from "./GhostButton";

function CartItemListContainer() {
  const { getCartItems, emptyCart } = useContext(CartContext);
  const items = getCartItems();
  function buildCartItem(item) {
    return <CartItem key={item.id} item={item} />;
  }
  return (
    <section className="flex grow flex-col gap-4">
      {items.map(buildCartItem)}
      <GhostButton label="Empty cart" handler={emptyCart} />
    </section>
  );
}

export default CartItemListContainer;
