import useCategoryDetailData from "../hooks/useCategoryDetailData";
import CategoryTitle from "./CategoryTitle";

function CategoryTitleContainer({ categoryID }) {
  const category = useCategoryDetailData(categoryID);
  return <CategoryTitle category={category} />;
}

export default CategoryTitleContainer;
