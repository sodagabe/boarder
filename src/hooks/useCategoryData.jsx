import ProductAPI from "../js/productAPI";
import useProductAPI from "./useProductAPI";

function useCategoryData() {
  const categories = useProductAPI({
    serviceType: ProductAPI.Services.CATEGORIES,
  });
  return categories;
}

export default useCategoryData;
