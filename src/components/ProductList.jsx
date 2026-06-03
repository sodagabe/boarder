function ProductList({ products, mapFunction }) {
  return (
    <section className="flex flex-col gap-4">
      {products.map(mapFunction)}
    </section>
  );
}

export default ProductList;
