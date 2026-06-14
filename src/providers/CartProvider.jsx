import CartContext from "../context/CartContext";

function CartProvider({ children }) {
  const cartData = [];
  return (
    <CartContext.Provider value={cartData}>{children}</CartContext.Provider>
  );
}

export default CartProvider;
