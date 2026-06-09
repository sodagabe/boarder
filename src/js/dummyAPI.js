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

class DummyCategory {
  #slug;
  #name;
  #url;

  constructor({ slug, name, url }) {
    this.#slug = slug;
    this.#name = name;
    this.#url = url;
  }

  get slug() {
    return this.#slug;
  }

  get name() {
    return this.#name;
  }

  get url() {
    return this.#url;
  }
}

class DummyAPI {
  static #baseURL = "https://dummyjson.com/products";
  static #categoriesURI = "/categories";
  static #productsByCategoryURI = "/category";

  static buildURL(uri) {
    return `${this.#baseURL}${uri}`;
  }

  static #buildProducts(productsPage) {
    const products = [];
    productsPage.forEach((productData) => {
      const product = new DummyProduct({ ...productData });
      products.push(product);
    });
    return products;
  }

  static async getProducts(categoryID) {
    let url = categoryID
      ? this.buildURL(`${this.#productsByCategoryURI}/${categoryID}`)
      : this.#baseURL;
    const productsData = await makeRequest({ url: url });
    const productsDataPage = productsData.products;
    const products = this.#buildProducts(productsDataPage);
    return products;
  }

  static async getCategories() {
    let url = this.buildURL(this.#categoriesURI);
    const categoriesData = await makeRequest({ url: url });
    const categories = [];
    categoriesData.forEach((categoryData) => {
      const category = new DummyCategory({ ...categoryData });
      categories.push(category);
    });
    return categories;
  }
}

export default DummyAPI;
