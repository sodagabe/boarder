class CartItem {
  #id;

  constructor(id, qty = 1) {
    this.#id = id;
    this.qty = qty;
  }

  get id() {
    return this.#id;
  }
}

export default CartItem;
