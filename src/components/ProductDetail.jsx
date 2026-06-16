import Button from "./Button";

function ProductDetail({ product, category, handler }) {
  return (
    <section className="flex">
      <div>
        <img src={product.imageURL} alt="" />
      </div>
      <div className="flex flex-col p-4">
        <h2 className="text-5xl">{product.title}</h2>
        <p>
          {product.min_players} - {product.max_players} players
        </p>
        <p>{category.name}</p>
        <Button label="Add to cart" handler={handler} />
      </div>
    </section>
  );
}

export default ProductDetail;
