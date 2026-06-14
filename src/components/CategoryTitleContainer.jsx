import useCategoryDetailData from "../hooks/useCategoryDetailData";
import CategoryTitle from "./CategoryTitle";

function CategoryTitleContainer({ categoryID }) {
  const [category, categoryLoaded] = useCategoryDetailData(categoryID);
  return <>{categoryLoaded && <CategoryTitle category={category} />}</>;
}

export default CategoryTitleContainer;
