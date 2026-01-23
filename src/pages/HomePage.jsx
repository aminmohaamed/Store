import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SignupComponent from "../features/auth/SignupPage";
export default function HomePage() {
  const { user } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const count = useSelector((store) => store.cart.items.length);
  if (!user) {
    return <SignupComponent />;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center  bg-linear-to-br from-green-400 via-green-600 to-green-800  text-white">
      <h1 className="text-4xl font-bold mb-4">
        Welcome back, {user.username}!
      </h1>
      <p className="mb-8 text-lg">
        Explore products, manage your cart, or add new products.
      </p>

      <div className="flex flex-col md:flex-row gap-4">
        <button
          onClick={() => navigate("/product")}
          className="bg-white text-green-800 font-bold px-6 py-3 rounded-lg hover:scale-105 transition"
        >
          Products
        </button>
        <button
          onClick={() => navigate("/cart")}
          className="bg-white text-green-700 font-bold px-6 py-3 rounded-lg hover:scale-105 transition"
        >
          Cart ({count})
        </button>
        <button
          onClick={() => navigate("/create")}
          className="bg-white text-green-600 font-bold px-6 py-3 rounded-lg hover:scale-105 transition"
        >
          Create Product
        </button>
      </div>
    </div>
  );
}
