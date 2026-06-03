import Product from "./Product";
import ProductList from "./ProductList";

function ProductListContainer() {
  const products = [
    {
      id: 1,
      title: "PBT keycaps set",
      description: "A complete set of PBT keycaps for QWERTY layout.",
    },
    {
      id: 2,
      title: "ABS keycaps set",
      description: "A complete set of ABS keycaps for QWERTY layout.",
    },
  ];
  const buildProduct = (product) => {
    return (
      <Product
        key={product.id}
        title={product.title}
        description={product.description}
      ></Product>
    );
  };
  return (
    <ProductList products={products} mapFunction={buildProduct}></ProductList>
  );
}

export default ProductListContainer;
