import Button from "./Button";

function ProductDetail({ product, category, handler }) {
  return (
    <section className="flex h-max grow flex-col sm:flex-row">
      <img
        className="h-80 w-full rounded-xl bg-neutral-900 object-contain sm:aspect-square sm:h-120 sm:w-120 lg:h-150 lg:w-150"
        src={product.imageURL}
        alt=""
      />
      <div className="flex flex-col gap-8 px-8 sm:grow">
        <h2 className="text-5xl font-bold">{product.title}</h2>
        <p className="tracking-widest uppercase">{category.name}</p>
        <div className="flex flex-col gap-2">
          <p>
            <span className="font-semibold">
              {product.min_players} to {product.max_players}
            </span>{" "}
            players
          </p>
          <p>
            <span className="font-semibold">
              {product.min_time} to {product.max_time}
            </span>{" "}
            minutes
          </p>
          <p>
            Ages <span className="font-semibold">{product.min_age} and up</span>
          </p>
        </div>
        <p className="currency text-2xl font-bold">{product.price}</p>
        <Button label="Add to cart" handler={handler} />
      </div>
    </section>
  );
}

export default ProductDetail;
