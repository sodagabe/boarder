import Product from "./Product";
import ProductList from "./ProductList";
import useProductData from "../hooks/useProductData";

function ProductListContainer() {
  const products = useProductData();
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
