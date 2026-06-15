import { useState } from "react";
import CartContext from "../context/CartContext";
import CartItem from "../js/entities/cartItem";

function CartProvider({ children }) {
  const [cart, setCart] = useState({});
  function addToCart(product) {
    const id = product.id;
    const updatedCart = { ...cart };
    if (Object.hasOwn(cart, id)) {
      updatedCart[id].qty++;
    } else {
      updatedCart[id] = new CartItem(id);
    }
    setCart(updatedCart);
  }
  return (
    <CartContext.Provider value={addToCart}>{children}</CartContext.Provider>
  );
}

export default CartProvider;
