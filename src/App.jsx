import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";

const ProductsPage = lazy(() => import("./pages/ProductsPage"));
const ProductDetailsPage = lazy(() => import("./pages/ProductDetailsPage"));
const CreateProductPage = lazy(() => import("./pages/CreateProductPage"));
const CartPage = lazy(() => import("./features/cart/CartPage"));
const LoginPage = lazy(() => import("./features/auth/LoginPage"));
const SignupPage = lazy(() => import("./features/auth/SignupPage"));
const PrivateRoute = lazy(() => import("./components/PrivateRoute"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const HomePage = lazy(() => import("./pages/HomePage"));
export default function App() {
  return (
    <Router>
      <Navbar />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/product" element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />

          <Route
            path="/create"
            element={
              <PrivateRoute>
                <CreateProductPage />
              </PrivateRoute>
            }
          />

          <Route
            path="/cart"
            element={
              <PrivateRoute>
                <CartPage />
              </PrivateRoute>
            }
          />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
