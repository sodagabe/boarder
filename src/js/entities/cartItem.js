class CartItem {
  #id;
  #title;
  #ppu;

  constructor({ product, qty = 1 }) {
    this.#id = product.id;
    this.#title = product.title;
    this.#ppu = product.price;
    this.qty = qty;
  }

  get id() {
    return this.#id;
  }

  get title() {
    return this.#title;
  }

  get ppu() {
    return this.#ppu;
  }

  get subtotal() {
    return this.ppu * this.qty;
  }
}

export default CartItem;
