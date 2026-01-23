import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../api/productsApi";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getCurrentQuantityById } from "../features/cart/cartSlice";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import ButtonBack from "../components/ButtonBack";
import Button from "../components/Button";
import DeleteItem from "../features/cart/DeleteItem";

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

  const currentQuantity = useSelector(
    product?.id ? getCurrentQuantityById(product.id) : () => 0
  );

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
          {!currentQuantity > 0 ? (
            <Button
              type="black"
              onClick={() => {
                dispatch(addToCart(product));
              }}
            >
              Add to Cart
            </Button>
          ) : (
            <DeleteItem orderId={product.id}>Delete </DeleteItem>
          )}

          <ButtonBack />
        </div>
      </div>
    </div>
  );
}
