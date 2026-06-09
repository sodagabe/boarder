import { useMemo } from "react";
import ProductAPI from "../js/productAPI";
import useProductAPI from "./useProductAPI";

function useProductData(categoryID) {
  const params = useMemo(
    () => ({
      categoryID: categoryID,
    }),
    [categoryID],
  );
  const products = useProductAPI({
    serviceType: ProductAPI.Services.PRODUCTS,
    params: params,
  });
  return products;
}

export default useProductData;
