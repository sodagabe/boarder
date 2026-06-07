import Category from "./Category";
import CategoryList from "./CategoryList";
import useCategoryData from "../hooks/useCategoryData";

function CategoryListContainer() {
  const categories = useCategoryData();
  const buildCategory = (category) => (
    <Category key={category.id} category={category} />
  );
  return <CategoryList categories={categories} mapFunction={buildCategory} />;
}

export default CategoryListContainer;
