import { useMemo } from "react";
import ProductAPI from "../js/productAPI";
import useProductAPI from "./useProductAPI";

function useCategoryDetailData(categoryID) {
  const params = useMemo(
    () => (categoryID ? { categoryID: categoryID } : null),
    [categoryID],
  );
  const results = useProductAPI({
    serviceType: ProductAPI.Services.CATEGORY,
    params: params,
  });
  return results;
}

export default useCategoryDetailData;
