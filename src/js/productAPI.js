import DummyAPI from "./dummyAPI";
import Product from "./entities/product";
import Category from "./entities/category";

class ProductAPI {
  static Services = Object.freeze({
    PRODUCTS: Symbol("products"),
    CATEGORIES: Symbol("categories"),
  });

  static #productFromDummy(dummyProduct) {
    return new Product({
      id: dummyProduct.id,
      title: dummyProduct.title,
      description: dummyProduct.description,
      thumbnailURL: dummyProduct.thumbnail,
      price: dummyProduct.price,
      categoryID: dummyProduct.categoryID,
    });
  }

  static #categoryFromDummy(dummyCategory) {
    return new Category({
      id: dummyCategory.slug,
      name: dummyCategory.name,
    });
  }

  static async #getItems(fetch, transform) {
    const itemsFromService = await fetch();
    const items = [];
    itemsFromService.forEach((itemFromService) => {
      const item = transform(itemFromService);
      items.push(item);
    });
    return items;
  }

  static getService(serviceType, params) {
    let service = null;
    switch (serviceType) {
      case this.Services.PRODUCTS:
        service = () => this.getProducts(params);
        break;
      case this.Services.CATEGORIES:
        service = () => this.getCategories();
        break;
    }
    return service;
  }

  static async getProducts(categoryID) {
    const products = await this.#getItems(
      () => DummyAPI.getProducts(categoryID),
      (productFromService) => this.#productFromDummy(productFromService),
    );
    return products;
  }

  static async getCategories() {
    const categories = await this.#getItems(
      () => DummyAPI.getCategories(),
      (categoryFromService) => this.#categoryFromDummy(categoryFromService),
    );
    return categories;
  }
}

export default ProductAPI;
