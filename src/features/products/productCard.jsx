import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../cart/cartSlice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="border rounded p-4 shadow hover:shadow-lg flex flex-col">
      <img src={product.image} className="h-40 object-contain mx-auto" />
      <h3 className="mt-2 font-semibold line-clamp-2">{product.title}</h3>
      <p className="text-sm text-gray-500">{product.category}</p>
      <p className="font-bold">${product.price}</p>

      <button
        onClick={() => {
          dispatch(addToCart(product));
        }}
        className="mt-2 bg-green-600 text-white py-1 rounded cursor-pointer"
      >
        Add to Cart
      </button>

      <Link
        to={`/product/${product.id}`}
        className="mt-2 text-center bg-black text-white py-1 rounded"
      >
        View Details
      </Link>
    </div>
  );
}
