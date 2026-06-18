import { useNavigate } from "react-router";
import Button from "./Button";

function EmptyCart() {
  const navigate = useNavigate();
  const handler = () => navigate("/");
  return (
    <div className="flex h-full w-full flex-col items-center gap-8 pt-20">
      <p className="text-2xl">Your cart is empty.</p>
      <Button label="Go shopping" handler={handler} />
    </div>
  );
}

export default EmptyCart;
