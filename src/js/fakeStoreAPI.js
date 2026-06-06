import makeRequest from "./utils/requests";

class FakeStoreProduct {
  #id;
  #title;
  #price;
  #description;
  #category;
  #image;

  constructor({ id, title, price, description, category, image }) {
    this.#id = id;
    this.#title = title;
    this.#price = price;
    this.#description = description;
    this.#category = category;
    this.#image = image;
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

  get image() {
    return this.#image;
  }
}

class FakeStoreAPI {
  static #baseURL = "https://fakestoreapi.com";
  static #productsURI = "/products";

  static buildURL(uri) {
    return `${this.#baseURL}${uri}`;
  }

  static async getProducts() {
    const url = this.buildURL(this.#productsURI);
    const productsData = await makeRequest(url);
    const products = [];
    productsData.forEach((productData) => {
      const product = new FakeStoreProduct({ ...productData });
      products.push(product);
    });
    return products;
  }
}

export default FakeStoreAPI;
