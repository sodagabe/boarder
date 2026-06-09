import { useParams } from "react-router";
import CategoryListContainer from "./CategoryListContainer";
import ProductListContainer from "./ProductListContainer";

function ProductsSectionContainer() {
  const { categoryID } = useParams();
  return (
    <section className="flex">
      <CategoryListContainer />
      <ProductListContainer categoryID={categoryID} />
    </section>
  );
}

export default ProductsSectionContainer;
