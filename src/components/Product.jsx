function Product({ thumbnailURL, title, description, price }) {
  return (
    <article className="flex flex-col bg-gray-100 p-4">
      <img className="w-30" src={thumbnailURL} alt="" />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{price}</p>
    </article>
  );
}

export default Product;
