import makeRequest from "./utils/requests";

class DummyProduct {
  #id;
  #title;
  #price;
  #description;
  #category;
  #thumbnail;
  #stock;

  constructor({ id, title, price, description, category, thumbnail, stock }) {
    this.#id = id;
    this.#title = title;
    this.#price = price;
    this.#description = description;
    this.#category = category;
    this.#thumbnail = thumbnail;
    this.#stock = stock;
  }

  get id() {
    return this.#id;
  }

  get title() {
    return this.#title;
  }

  get price() {
    return this.#price;
  }

  get description() {
    return this.#description;
  }

  get category() {
    return this.#category;
  }

  get thumbnail() {
    return this.#thumbnail;
  }

  get stock() {
    return this.#stock;
  }
}

class DummyAPI {
  static #baseURL = "https://dummyjson.com/products";

  static buildURL(uri) {
    return `${this.#baseURL}${uri}`;
  }

  static async getProducts() {
    const url = this.#baseURL;
    const productsData = await makeRequest({ url: url });
    const productsDataPage = productsData.products;
    const products = [];
    productsDataPage.forEach((productData) => {
      const product = new DummyProduct({ ...productData });
      products.push(product);
    });
    return products;
  }
}

export default DummyAPI;
