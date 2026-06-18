import IconButton from "./IconButton";
import { Plus, Minus } from "lucide-react";

function ItemCount({ countState, stock }) {
  const [count, setCount] = countState;
  const incrementHandler = () => {
    if (count < stock) setCount(count + 1);
  };
  const decrementHandler = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div className="flex items-center gap-2">
      <IconButton
        icon={<Minus />}
        handler={decrementHandler}
        className="outline-primary-500 text-primary-500 bg-transparent outline-2"
      />
      <div className="w-8 text-center text-lg font-semibold">{count}</div>
      <IconButton
        icon={<Plus />}
        handler={incrementHandler}
        className="outline-primary-500 text-primary-500 bg-transparent outline-2"
      />
    </div>
  );
}

export default ItemCount;
