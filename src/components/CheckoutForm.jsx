import { EmailInput, PhoneInput, TextInput } from "./Input";
import useCheckout from "../hooks/useCheckout";

function CheckoutForm() {
  const { formName, submitFunction } = useCheckout();
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-xl font-semibold">Your info</h2>
      <form
        className="flex flex-col gap-4"
        id={formName}
        name={formName}
        onSubmit={submitFunction}
      >
        <div className="flex gap-4">
          <TextInput label="First name" />
          <TextInput label="Last name" />
        </div>
        <EmailInput label="Email" />
        <PhoneInput label="Phone" />
        <TextInput label="Street address" />
        <TextInput label="Zip code" />
      </form>
    </div>
  );
}

export default CheckoutForm;
