import { useContext } from "react";
import CartItem from "./CartItem";
import CartContext from "../context/CartContext";
import GhostButton from "./GhostButton";

function CartItemListContainer() {
  const { getCartItems, emptyCart, removeItem } = useContext(CartContext);
  const items = getCartItems();
  function buildCartItem(item) {
    const removeHandler = () => removeItem(item);
    return <CartItem key={item.id} item={item} removeHandler={removeHandler} />;
  }
  return (
    <section className="flex h-fit grow flex-col gap-8">
      <div className="flex flex-col gap-8 rounded-xl">
        {items.map(buildCartItem)}
      </div>
      <GhostButton label="Empty cart" handler={emptyCart} />
    </section>
  );
}

export default CartItemListContainer;
