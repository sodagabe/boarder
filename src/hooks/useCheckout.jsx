import { useContext } from "react";
import CheckoutContext from "../context/CheckoutContext";

function useCheckout() {
  const checkout = useContext(CheckoutContext);
  return checkout;
}

export default useCheckout;
