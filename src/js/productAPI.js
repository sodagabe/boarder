import DummyAPI from "./dummyAPI";
import Product from "./entities/product";
import Category from "./entities/category";

class ProductAPI {
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

  static async getProducts() {
    const products = this.#getItems(
      () => {
        return DummyAPI.getProducts();
      },
      (productFromService) => {
        return this.#productFromDummy(productFromService);
      },
    );
    return products;
  }

  static getCategories() {
    const categories = this.#getItems(
      () => {
        DummyAPI.getCategories;
      },
      (categoryFromService) => {
        this.#categoryFromDummy(categoryFromService);
      },
    );
    return categories;
  }
}

export default ProductAPI;
