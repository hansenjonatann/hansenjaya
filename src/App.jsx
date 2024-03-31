import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import ProductPage from "./pages/products/index";
import ProductCreatePage from "./pages/products/create";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/product/create" element={<ProductCreatePage />} />
      </Routes>
    </>
  );
};

export default App;
