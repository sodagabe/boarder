import { serverTimestamp } from "firebase/firestore";
import CheckoutContext from "../context/CheckoutContext";
import FirestoreAPI from "../js/firebaseAPI";
import { useNavigate } from "react-router";
import useCart from "../hooks/useCart";

function CheckoutProvider({ children }) {
  const navigate = useNavigate();
  const formName = "checkoutForm";
  const { getLineItems, getTotal } = useCart();

  async function submitFunction(event) {
    event.preventDefault();
    const form = event.target;
    let order = {};
    let customer = {};
    for (const formControl of form.elements) {
      const nodeName = formControl.nodeName.toUpperCase();
      if (nodeName === "BUTTON") continue;
      const fieldName = formControl.id;
      const value = formControl.value;
      customer[fieldName] = value;
    }
    order.customer = customer;
    order.items = getLineItems();
    order.total = getTotal();
    order.createdOn = serverTimestamp();
    const docRef = FirestoreAPI.getNewDocRef({
      collectionName: "orders",
    });
    FirestoreAPI.setDoc({ docRef, data: order });
    navigate(`/order-confirmed/${docRef.id}`);
  }

  return (
    <CheckoutContext value={{ formName, submitFunction }}>
      {children}
    </CheckoutContext>
  );
}

export default CheckoutProvider;
