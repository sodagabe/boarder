import CartItem from "./CartItem";

function CartItemListContainer({ items }) {
  function buildCartItem(item) {
    return <CartItem key={item.id} item={item} />;
  }
  return (
    <section className="flex grow flex-col gap-4">
      {items.length > 0 ? items.map(buildCartItem) : <p>Your cart is empty.</p>}
    </section>
  );
}

export default CartItemListContainer;
