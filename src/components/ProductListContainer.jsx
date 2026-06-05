import { useEffect, useState } from "react";
import Product from "./Product";
import ProductList from "./ProductList";

function ProductListContainer() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchProducts(uri) {
      const response = await fetch(`https://fakestoreapi.com/${uri}`);
      const products = await response.json();
      if (!retrieved) {
        setProducts(products);
      }
      return products;
    }
    let retrieved = false;
    fetchProducts("/products");
    return () => {
      console.log(products);

      retrieved = true;
    };
  }, []);
  const buildProduct = (product) => {
    return (
      <Product
        key={product.id}
        thumbnailURL={product.image}
        title={product.title}
        description={product.description}
        price={product.price}
      ></Product>
    );
  };
  return products.length ? (
    <ProductList products={products} mapFunction={buildProduct}></ProductList>
  ) : (
    <p>Loading...</p>
  );
}

export default ProductListContainer;
