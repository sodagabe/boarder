import { Routes, Route } from "react-router";
import BasicLayout from "./components/layouts/BasicLayout";
import ProductsSectionContainer from "./components/ProductsSectionContainer";

function App() {
  return (
    <Routes>
      <Route element={<BasicLayout />}>
        <Route index element={<ProductsSectionContainer />} />
        <Route
          path="/category/:categoryID"
          element={<ProductsSectionContainer />}
        />
      </Route>
    </Routes>
  );
}

export default App;
