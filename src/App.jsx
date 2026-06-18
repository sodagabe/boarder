import { Routes, Route } from "react-router";
import BasicLayout from "./components/layouts/BasicLayout";
import ProductsSection from "./components/ProductsSection";
import ProductDetailContainer from "./components/ProductDetailContainer";
import CheckoutProvider from "./providers/CheckoutProvider";
import CartProvider from "./providers/CartProvider";
import CartContainer from "./components/CartContainer";
import Checkout from "./components/Checkout";
import FocusLayout from "./components/layouts/FocusLayout";
import OrderConfirmation from "./components/OrderConfirmation";

function App() {
  return (
    <CartProvider>
      <CheckoutProvider>
        <Routes>
          <Route element={<BasicLayout />}>
            <Route index element={<ProductsSection />} />
            <Route path="/category/:categoryID" element={<ProductsSection />} />
            <Route
              path="/product/:productID"
              element={<ProductDetailContainer />}
            />
            <Route path="/cart" element={<CartContainer />} />
          </Route>
          <Route element={<FocusLayout />}>
            <Route path="/checkout" element={<Checkout />} />
            <Route
              path="/order-confirmed/:orderID"
              element={<OrderConfirmation />}
            />
          </Route>
        </Routes>
      </CheckoutProvider>
    </CartProvider>
  );
}

export default App;
