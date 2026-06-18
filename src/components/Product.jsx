import { Link } from "react-router";

function Product({ product }) {
  const { thumbnailURL, title, description, price } = product;
  return (
    <Link to={`/product/${product.id}`}>
      <article className="hover:bg-secondary-50 hover:text-secondary-900 flex flex-col gap-2 rounded-lg bg-neutral-100 p-4 hover:scale-105 hover:shadow-xl">
        <img
          className="aspect-square w-full rounded-md bg-neutral-900 object-contain"
          src={thumbnailURL}
          alt=""
        />
        <h2 className="line-clamp-1 font-semibold">{title}</h2>
        <p>{description}</p>
        <p className="currency">{price}</p>
      </article>
    </Link>
  );
}

export default Product;
