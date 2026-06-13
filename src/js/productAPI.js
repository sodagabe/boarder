import Category from "./entities/category";
import Game from "./entities/game";
import FirestoreAPI from "./firebaseAPI";

class ProductAPI {
  static Services = Object.freeze({
    PRODUCTS: Symbol("products"),
    CATEGORIES: Symbol("categories"),
  });

  static #productFromFirebase(firebaseProduct) {
    const productData = firebaseProduct.data();
    return new Game({
      id: firebaseProduct.id,
      ...productData,
    });
  }

  static #categoryFromFirebase(firebaseCategory) {
    const categoryData = firebaseCategory.data();
    return new Category({
      id: firebaseCategory.id,
      name: categoryData.name,
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

  static getService(serviceType) {
    let service = null;
    switch (serviceType) {
      case this.Services.PRODUCTS:
        service = (params) => this.getProducts(params);
        break;
      case this.Services.CATEGORIES:
        service = () => this.getCategories();
        break;
    }
    return service;
  }

  static async getProducts({ categoryID }) {
    const constraints = categoryID
      ? [
          FirestoreAPI.getConstraint(
            "categoryIDs",
            "array-contains",
            categoryID,
          ),
        ]
      : [];
    const params = {
      collectionName: "games",
      constraints: constraints,
    };
    const products = await this.#getItems(
      () => FirestoreAPI.getDocs(params),
      (productFromService) => this.#productFromFirebase(productFromService),
    );
    return products;
  }

  static async getCategories() {
    const params = {
      collectionName: "game_categories",
    };
    const categories = await this.#getItems(
      () => FirestoreAPI.getDocs(params),
      (categoryFromService) => this.#categoryFromFirebase(categoryFromService),
    );
    return categories;
  }
}

export default ProductAPI;
