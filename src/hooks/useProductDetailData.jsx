import { useMemo } from "react";
import ProductAPI from "../js/productAPI";
import useProductAPI from "./useProductAPI";

function useProductDetailData(productID) {
  const params = useMemo(() => ({ productID: productID }), [productID]);
  const results = useProductAPI({
    serviceType: ProductAPI.Services.PRODUCT,
    params: params,
  });
  return results;
}

export default useProductDetailData;
