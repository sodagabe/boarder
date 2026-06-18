import OrderSummary from "./OrderSummary";
import CheckoutForm from "./CheckoutForm";
import useCart from "../hooks/useCart";
import useCheckout from "../hooks/useCheckout";
import Button from "./Button";

function Checkout() {
  const { getCartItems, getTotalBreakdown } = useCart();
  const items = getCartItems();
  const totalBreakdown = getTotalBreakdown();
  const { formName } = useCheckout();
  return (
    <section className="flex grow">
      <div className="flex grow flex-col gap-6 p-6">
        <CheckoutForm />
      </div>
      <div className="flex w-[40%] flex-col gap-6 p-6">
        <OrderSummary items={items} breakdown={totalBreakdown} />
        <Button label="Place order" fullWidth={true} form={formName} />
      </div>
    </section>
  );
}

export default Checkout;
