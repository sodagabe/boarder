function Product({ title, description }) {
  return (
    <article className="flex flex-col bg-gray-100 p-4">
      <h2>{title}</h2>
      <p>{description}</p>
    </article>
  );
}

export default Product;
