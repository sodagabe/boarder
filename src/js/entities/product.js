import { toCurrency } from "../utils/math";

class Product {
  #id;
  #title;
  #description;
  #thumbnailURL;
  #price;
  #categoryID;

  constructor({ id, title, description, thumbnailURL, price, categoryID }) {
    this.#id = id;
    this.#title = title;
    this.#description = description;
    this.#thumbnailURL = thumbnailURL;
    this.#price = price;
    this.#categoryID = categoryID;
  }

  static formatMonetaryValue(amount) {
    return Number(toCurrency(amount));
  }

  get id() {
    return this.#id;
  }

  get title() {
    return this.#title;
  }

  get description() {
    return this.#description;
  }

  get thumbnailURL() {
    return this.#thumbnailURL;
  }

  get price() {
    const amount = this.#price;
    return Product.formatMonetaryValue(amount);
  }

  get priceString() {
    return toCurrency(this.price);
  }

  get categoryID() {
    return this.#categoryID;
  }
}

export default Product;
