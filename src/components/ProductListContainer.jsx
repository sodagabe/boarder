import Product from "./Product";
import ProductList from "./ProductList";
import useProductData from "../hooks/useProductData";

function ProductListContainer({ categoryID }) {
  const products = useProductData();
  const buildProduct = (product) => {
    return <Product key={product.id} product={product} />;
  };
  return products.length ? (
    <section className="flex flex-col">
      {categoryID ? <h2 className="text-4xl">{categoryID}</h2> : null}
      <ProductList products={products} mapFunction={buildProduct} />
    </section>
  ) : (
    <p>Loading...</p>
  );
}

export default ProductListContainer;
