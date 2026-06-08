import ProductAPI from "../js/productAPI";
import useProductAPI from "./useProductAPI";

function useProductData(categoryID) {
  const products = useProductAPI({
    serviceType: ProductAPI.Services.PRODUCTS,
    params: { categoryID: categoryID },
  });
  return products;
}

export default useProductData;
