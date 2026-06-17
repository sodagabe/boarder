import { useState } from "react";
import CartContext from "../context/CartContext";
import CartItem from "../js/entities/cartItem";

function CartProvider({ children }) {
  const [cart, setCart] = useState({});
  const cartArray = Object.values(cart);

  function addToCart(product) {
    const id = product.id;
    const updatedCart = { ...cart };
    if (Object.hasOwn(cart, id)) {
      updatedCart[id].qty++;
    } else {
      updatedCart[id] = new CartItem({ product });
    }
    setCart(updatedCart);
  }

  function getCartItems() {
    return cartArray;
  }

  function getCartQty() {
    return Object.keys(cart).length;
  }

  function getItemsSubtotal() {
    return cartArray.reduce((subtotal, item) => {
      const itemSubtotal = item.ppu * item.qty;
      return subtotal + itemSubtotal;
    }, 0);
  }

  function getShippingFee() {
    let fee = 0;
    const totalQty = cartArray.reduce((subQty, item) => subQty + item.qty, 0);
    switch (totalQty) {
      case totalQty < 3:
        fee = 10;
        break;
      case totalQty >= 3 && totalQty < 10:
        fee = 20;
        break;
      case totalQty >= 10:
        fee = 50;
        break;
    }
    return fee;
  }

  function getVAT(subtotal) {
    return 0.15 * subtotal;
  }

  function emptyCart() {
    setCart({});
  }

  return (
    <CartContext
      value={{
        getCartItems,
        addToCart,
        getCartQty,
        getItemsSubtotal,
        getShippingFee,
        getVAT,
        emptyCart,
      }}
    >
      {children}
    </CartContext>
  );
}

export default CartProvider;
