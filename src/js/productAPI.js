import Product from "./entities/product";
import FakeStoreAPI from "./fakeStoreAPI";

class ProductAPI {
  static #productFromFakeStore(fakeProduct) {
    return new Product({
      id: fakeProduct.id,
      title: fakeProduct.title,
      description: fakeProduct.description,
      thumbnailURL: fakeProduct.image,
      price: fakeProduct.price,
      categoryID: fakeProduct.categoryID,
    });
  }

  static async getProducts() {
    const productsExternal = await FakeStoreAPI.getProducts();
    const products = [];
    productsExternal.forEach((productExternal) => {
      const product = this.#productFromFakeStore(productExternal);
      products.push(product);
    });
    return products;
  }
}

export default ProductAPI;
