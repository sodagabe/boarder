import { useMemo } from "react";
import ProductAPI from "../js/productAPI";
import useProductAPI from "./useProductAPI";

function useCategoryData() {
  const params = useMemo(() => ({}), []);
  const categories = useProductAPI({
    serviceType: ProductAPI.Services.CATEGORIES,
    params: params,
  });
  return categories;
}

export default useCategoryData;
