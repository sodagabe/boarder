import { Routes, Route } from "react-router";
import BasicLayout from "./components/layouts/BasicLayout";
import ProductsSectionContainer from "./components/ProductsSectionContainer";
import ProductDetailContainer from "./components/ProductDetailContainer";

function App() {
  return (
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
      </Route>
    </Routes>
  );
}

export default App;
