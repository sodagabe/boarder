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
    return this.#price;
  }

  get categoryID() {
    return this.#categoryID;
  }
}

export default Product;
