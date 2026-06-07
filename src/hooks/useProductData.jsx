import ProductAPI from "../js/productAPI";
import useProductAPI from "./useProductAPI";

function useProductData() {
  const products = useProductAPI(ProductAPI.Services.PRODUCTS);
  return products;
}

export default useProductData;
