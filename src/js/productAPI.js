import DummyAPI from "./dummyAPI";
import Product from "./entities/product";

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

  static async getProducts() {
    const productsExternal = await DummyAPI.getProducts();
    const products = [];
    productsExternal.forEach((productExternal) => {
      const product = this.#productFromDummy(productExternal);
      products.push(product);
    });
    return products;
  }

  static getCategoriesFromProducts(products) {
    const categories = new Set();
    products.reduce((current) => {
      categories.add(current.categoryID);
    });
    return categories.values();
  }
}

export default ProductAPI;
