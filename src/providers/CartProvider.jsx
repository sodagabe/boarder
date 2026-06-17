import CartContext from "../context/CartContext";
import CartItem from "../js/entities/cartItem";
import { toCurrency } from "../js/utils/math";
import useLocalStorage from "../hooks/useLocalStorage";

function CartProvider({ children }) {
  const [cart, setCart] = useLocalStorage("cart", {});

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
    const subtotal = cartArray.reduce((subtotal, item) => {
      const itemSubtotal = item.ppu * item.qty;
      return subtotal + itemSubtotal;
    }, 0);
    return toCurrency(subtotal);
  }

  function getShippingFee() {
    let fee;
    const totalQty = cartArray.reduce((subQty, item) => subQty + item.qty, 0);
    if (totalQty < 3) fee = 9.99;
    else if (totalQty >= 3 && totalQty < 10) fee = 19.99;
    else fee = 49.99;
    return toCurrency(fee);
  }

  function getTax(subtotal) {
    const amount = 0.15 * subtotal;
    return toCurrency(amount);
  }

  function getTotal() {
    const itemsSubtotal = Number(getItemsSubtotal());
    const tax = Number(getTax(itemsSubtotal));
    const shipping = Number(getShippingFee());
    const total = itemsSubtotal + tax + shipping;
    return toCurrency(total);
  }

  function emptyCart() {
    setCart({});
  }

  function removeItem(item) {
    const productID = item.id;
    const updatedCart = { ...cart };
    delete updatedCart[productID];
    setCart(updatedCart);
  }

  return (
    <CartContext
      value={{
        getCartItems,
        addToCart,
        getCartQty,
        getItemsSubtotal,
        getTotal,
        getShippingFee,
        getTax,
        emptyCart,
        removeItem,
      }}
    >
      {children}
    </CartContext>
  );
}

export default CartProvider;
