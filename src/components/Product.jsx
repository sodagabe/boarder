import { Link } from "react-router";

function Product({ product }) {
  const { thumbnailURL, title, description, price } = product;
  return (
    <Link to={`/product/${product.id}`}>
      <article className="flex flex-col bg-gray-100 p-4">
        <img className="w-30" src={thumbnailURL} alt="" />
        <h2>{title}</h2>
        <p>{description}</p>
        <p className="currency">{price}</p>
      </article>
    </Link>
  );
}

export default Product;
