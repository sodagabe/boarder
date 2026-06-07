import ProductAPI from "../js/productAPI";
import useProductAPI from "./useProductAPI";

function useCategoryData() {
  const categories = useProductAPI(ProductAPI.Services.CATEGORIES);
  return categories;
}

export default useCategoryData;
