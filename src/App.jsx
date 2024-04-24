import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import ProductPage from "./pages/products/index";
import ProductCreatePage from "./pages/products/create";
import ProductEditPage from "./pages/products/edit";
import CategoryPage from "./pages/catagories";
import CategoryCreatePage from "./pages/catagories/create";
import CategoryEditPage from "./pages/catagories/edit";
import UnitPage from "./pages/units";
import UnitCreatePage from "./pages/units/create";
import UnitEditPage from "./pages/units/edit";
import SupplierPage from "./pages/suppliers";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/product/create" element={<ProductCreatePage />} />
        <Route path="/product/edit/:id" element={<ProductEditPage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/category/create" element={<CategoryCreatePage />} />
        <Route path="/category/edit/:id" element={<CategoryEditPage />} />
        <Route path="/unit" element={<UnitPage />} />
        <Route path="/unit/create" element={<UnitCreatePage />} />
        <Route path="/unit/edit/:id" element={<UnitEditPage />} />
        <Route path="/supplier" element={<SupplierPage />} />
      </Routes>
    </>
  );
};

export default App;
