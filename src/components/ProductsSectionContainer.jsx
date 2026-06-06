import useProductData from "../hooks/useProductData";
import CategoriesContainer from "./CategoriesContainer";
import ProductListContainer from "./ProductListContainer";

function ProductsSectionContainer() {
  const products = useProductData();
  return (
    <section className="flex">
      <CategoriesContainer products={products} />
      <ProductListContainer products={products} />
    </section>
  );
}

export default ProductsSectionContainer;
