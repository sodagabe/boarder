import { Routes, Route } from "react-router";
import BasicLayout from "./components/layouts/BasicLayout";
import ProductsSectionContainer from "./components/ProductsSectionContainer";
import ProductDetailContainer from "./components/ProductDetailContainer";
import CheckoutProvider from "./providers/CheckoutProvider";
import CartProvider from "./providers/CartProvider";
import CartContainer from "./components/CartContainer";
import Checkout from "./components/Checkout";
import FocusLayout from "./components/layouts/FocusLayout";

function App() {
  return (
    <CartProvider>
      <CheckoutProvider>
        <Routes>
          <Route element={<BasicLayout />}>
            <Route index element={<ProductsSectionContainer />} />
            <Route
              path="/category/:categoryID"
              element={<ProductsSectionContainer />}
            />
            <Route
              path="/product/:productID"
              element={<ProductDetailContainer />}
            />
            <Route path="/cart" element={<CartContainer />} />
          </Route>
          <Route element={<FocusLayout />}>
            <Route path="/checkout" element={<Checkout />} />
          </Route>
        </Routes>
      </CheckoutProvider>
    </CartProvider>
  );
}

export default App;
