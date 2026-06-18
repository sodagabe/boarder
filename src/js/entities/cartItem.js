import { toCurrency } from "../utils/math";

class CartItem {
  #id;
  #title;
  #thumbnailURL;
  #price;

  constructor({ product, qty = 1 }) {
    this.#id = product.id;
    this.#title = product.title;
    this.#thumbnailURL = product.thumbnailURL;
    this.#price = product.price;
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

  get price() {
    return this.#price;
  }

  get priceString() {
    return toCurrency(this.price);
  }

  get subtotal() {
    return this.price * this.qty;
  }

  get subtotalString() {
    return toCurrency(this.subtotal);
  }

  get multiple() {
    return Boolean(this.qty > 1);
  }

  toJSON() {
    return {
      id: this.id,
      title: this.title,
      thumbnailURL: this.thumbnailURL,
      price: this.price,
      qty: this.qty,
    };
  }
}

export default CartItem;
