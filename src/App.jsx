import { Routes, Route } from "react-router";
import BasicLayout from "./components/layouts/BasicLayout";
import ProductListContainer from "./components/ProductListContainer";

function App() {
  return (
    <Routes>
      <Route element={<BasicLayout />}>
        <Route index element={<ProductListContainer />} />
      </Route>
    </Routes>
  );
}

export default App;
