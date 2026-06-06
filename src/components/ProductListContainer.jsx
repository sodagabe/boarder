import Product from "./Product";
import ProductList from "./ProductList";

function ProductListContainer({ products }) {
  const buildProduct = (product) => {
    return <Product key={product.id} product={product} />;
  };
  return products.length ? (
    <ProductList products={products} mapFunction={buildProduct} />
  ) : (
    <p>Loading...</p>
  );
}

export default ProductListContainer;
