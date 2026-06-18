function ProductList({ products, mapFunction }) {
  return (
    <section className="grid w-full gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products.map(mapFunction)}
    </section>
  );
}

export default ProductList;
