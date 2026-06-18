import CheckoutContext from "../context/CheckoutContext";

function CheckoutProvider({ children }) {
  const formName = "checkoutForm";

  function submitFunction(event) {
    event.preventDefault();
    const form = event.target;
    let order = {};
    for (const formControl of form.elements) {
      const nodeName = formControl.nodeName.toUpperCase();
      if (nodeName === "BUTTON") continue;
      const fieldName = formControl.id;
      const value = formControl.value;
      order[fieldName] = value;
    }
  }

  return (
    <CheckoutContext value={{ formName, submitFunction }}>
      {children}
    </CheckoutContext>
  );
}

export default CheckoutProvider;
