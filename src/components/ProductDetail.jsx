import { Check } from "lucide-react";
import Button from "./Button";
import ItemCount from "./ItemCount";

function ProductDetail({ product, category, handler, countState, isInCart }) {
  const [count, setCount] = countState;
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
        {product.inStock ? (
          isInCart ? (
            <div className="flex w-fit items-center gap-2 rounded-sm px-4 py-3 font-semibold text-green-500 outline-2 outline-green-500">
              <Check />
              <p>Already in cart</p>
            </div>
          ) : (
            <>
              <p>
                <span className="font-semibold">{product.stock}</span> in stock
              </p>
              <ItemCount countState={[count, setCount]} stock={product.stock} />
              <Button label={() => `Add ${count} to cart`} handler={handler} />
            </>
          )
        ) : (
          <p className="w-fit rounded-sm px-4 py-3 font-semibold text-neutral-500 outline-2 outline-neutral-500">
            Out of stock
          </p>
        )}
      </div>
    </section>
  );
}

export default ProductDetail;
