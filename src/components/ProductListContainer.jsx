import useCategoryDetailData from "../hooks/useCategoryDetailData";
import useProductData from "../hooks/useProductData";
import Product from "./Product";
import ProductList from "./ProductList";
import CategoryTitle from "./CategoryTitle";

function ProductListContainer({ categoryID }) {
  const [products, productsLoaded] = useProductData(categoryID);
  const [category, categoryLoaded] = useCategoryDetailData(categoryID);
  const buildProduct = (product) => {
    return <Product key={product.id} product={product} />;
  };
  return (productsLoaded && categoryLoaded) ||
    (productsLoaded && !categoryID) ? (
    <section className="flex w-4/5 flex-col gap-8">
      {categoryID && <CategoryTitle category={category} />}
      {products.length > 0 ? (
        <ProductList products={products} mapFunction={buildProduct} />
      ) : (
        "No products in this category."
      )}
    </section>
  ) : (
    <p>Loading...</p>
  );
}

export default ProductListContainer;
