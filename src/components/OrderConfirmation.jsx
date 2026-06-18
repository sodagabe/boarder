import { useNavigate, useParams } from "react-router";
import Button from "./Button";
import { useEffect, useEffectEvent } from "react";
import useCart from "../hooks/useCart";

function OrderConfirmation() {
  const { orderID } = useParams();
  const navigate = useNavigate();
  const buttonHandler = () => navigate("/");
  const { emptyCart } = useCart();

  const emptyCartEffect = useEffectEvent(() => emptyCart());
  useEffect(() => emptyCartEffect(), []);

  return (
    <div className="flex w-full flex-col items-center justify-center gap-12 text-center">
      <h2 className="text-4xl font-bold">We received your order!</h2>
      <div className="flex flex-col items-center gap-1">
        <p className="text-lg">Your order number is:</p>
        <p className="text-2xl font-bold">{orderID}</p>
      </div>
      <div className="flex flex-col gap-2">
        <p>
          We have sent you an email with your order details. Please keep your it
          in your records in case you need to contact support.
        </p>
        <p>Thank you for shopping at boarder!</p>
      </div>
      <Button label="Go back to the shop" handler={buttonHandler} />
    </div>
  );
}

export default OrderConfirmation;
