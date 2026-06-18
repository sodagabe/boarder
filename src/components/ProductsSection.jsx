import { useParams } from "react-router";
import CategoryListContainer from "./CategoryListContainer";
import ProductListContainer from "./ProductListContainer";

function ProductsSection() {
  const { categoryID } = useParams();

  return (
    <section className="flex grow gap-6">
      <CategoryListContainer />
      <ProductListContainer categoryID={categoryID} />
    </section>
  );
}

export default ProductsSection;
