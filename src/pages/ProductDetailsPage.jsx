import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../api/productsApi";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import ButtonBack from "../components/ButtonBack";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProductById(id)
      .then(setProduct)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [id]);
  console.log(product);
  useEffect(() => {
    if (product?.title) {
      document.title = product.title;
    }

    return () => {
      document.title = "Store";
    };
  }, [product]);

  if (!product) return <p>Product not found</p>;
  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="max-w-4xl mx-auto p-6 grid md:grid-cols-2 gap-6">
      <img src={product.image} className="h-80 object-contain mx-auto" />

      <div>
        <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
        <p className="text-gray-600 mb-2">{product.category}</p>
        <p className="mb-4">{product.description}</p>
        <p className="text-xl font-semibold mb-4">${product.price}</p>

        <div className="flex gap-3">
          <button
            onClick={() => dispatch(addToCart(product))}
            className="bg-black text-white px-4 py-2 rounded"
          >
            Add to Cart
          </button>

          <ButtonBack />
        </div>
      </div>
    </div>
  );
}
