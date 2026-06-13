import { useMemo } from "react";
import ProductAPI from "../js/productAPI";
import useProductAPI from "./useProductAPI";

function useCategoryDetailData(categoryID) {
  const params = useMemo(() => ({ categoryID: categoryID }), [categoryID]);
  const category = useProductAPI({
    serviceType: ProductAPI.Services.CATEGORY,
    params: params,
  });
  return category;
}

export default useCategoryDetailData;
