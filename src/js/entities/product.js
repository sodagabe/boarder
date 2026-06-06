class Product {
  #id;
  #title;
  #description;
  #thumbnail;
  #price;
  #categoryID;

  constructor({ id, title, description, thumbnail, price, categoryID }) {
    this.#id = id;
    this.#title = title;
    this.#description = description;
    this.#thumbnail = thumbnail;
    this.#price = price;
    this.#categoryID = categoryID;
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

  get thumbnail() {
    return this.#thumbnail;
  }

  get price() {
    return this.#price;
  }

  get categoryID() {
    return this.#categoryID;
  }
}

export default Product;
