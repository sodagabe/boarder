import CategoryListContainer from "./CategoryListContainer";
import ProductListContainer from "./ProductListContainer";

function ProductsSectionContainer() {
  return (
    <section className="flex">
      <CategoryListContainer />
      <ProductListContainer />
    </section>
  );
}

export default ProductsSectionContainer;
