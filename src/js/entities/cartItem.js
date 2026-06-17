class CartItem {
  #id;
  #title;
  #thumbnailURL;
  #ppu;

  constructor({ product, qty = 1 }) {
    this.#id = product.id;
    this.#title = product.title;
    this.#thumbnailURL = product.thumbnailURL;
    this.#ppu = product.price;
    this.qty = qty;
  }

  get id() {
    return this.#id;
  }

  get title() {
    return this.#title;
  }

  get thumbnailURL() {
    return this.#thumbnailURL;
  }

  get ppu() {
    return this.#ppu;
  }

  get subtotal() {
    return this.ppu * this.qty;
  }

  toJSON() {
    return {
      id: this.id,
      title: this.title,
      thumbnailURL: this.thumbnailURL,
      ppu: this.ppu,
      qty: this.qty,
    };
  }
}

export default CartItem;
