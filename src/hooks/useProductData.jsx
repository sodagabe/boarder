import { useState, useEffect } from "react";
import ProductAPI from "../js/productAPI";

function useProductData() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    let finishedFetching = false;
    async function startFetching() {
      const products = await ProductAPI.getProducts();
      if (!finishedFetching) {
        setProducts(products);
      }
    }
    startFetching();
    return () => {
      finishedFetching = true;
    };
  }, []);
  return products;
}

export default useProductData;
