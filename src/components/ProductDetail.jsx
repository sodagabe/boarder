function ProductDetail({ product, category }) {
  return (
    <section className="flex">
      <div>Picture</div>
      <div className="flex flex-col">
        <h2 className="text-5xl">{product.title}</h2>
        <p>
          {product.min_players} - {product.max_players} players
        </p>
        <p>{category.name}</p>
      </div>
    </section>
  );
}

export default ProductDetail;
