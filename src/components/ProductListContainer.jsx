import useProductData from "../hooks/useProductData";
import Product from "./Product";
import ProductList from "./ProductList";
import CategoryTitleContainer from "./CategoryTitleContainer";

function ProductListContainer({ categoryID }) {
  const [products, productsLoaded] = useProductData(categoryID);
  const buildProduct = (product) => {
    return <Product key={product.id} product={product} />;
  };
  return productsLoaded ? (
    <section className="flex flex-col">
      {categoryID && <CategoryTitleContainer categoryID={categoryID} />}
      <ProductList products={products} mapFunction={buildProduct} />
    </section>
  ) : (
    <p>Loading...</p>
  );
}

export default ProductListContainer;
