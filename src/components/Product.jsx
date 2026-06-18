import { Link } from "react-router";

function Product({ product }) {
  const { thumbnailURL, title, description, priceString, inStock } = product;
  return (
    <Link to={`/product/${product.id}`}>
      <article
        className={`flex flex-col gap-2 rounded-lg bg-neutral-100 p-4 ${inStock ? "hover:bg-secondary-50 hover:text-secondary-900 hover:scale-105 hover:shadow-xl" : "opacity-50"}`}
      >
        <img
          className="aspect-square w-full rounded-md bg-neutral-900 object-contain"
          src={thumbnailURL}
          alt=""
        />
        <h2 className="line-clamp-1 font-semibold">{title}</h2>
        <p>{description}</p>
        {inStock ? (
          <p className="currency">{priceString}</p>
        ) : (
          <p>Out of stock</p>
        )}
      </article>
    </Link>
  );
}

export default Product;
