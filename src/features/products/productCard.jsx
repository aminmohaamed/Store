import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getCurrentQuantityById } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import Button from "../../components/Button";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantityById(product.id));
  return (
    <div className="border rounded p-4 shadow hover:shadow-lg flex flex-col gap-2 justify-end">
      <img src={product.image} className="h-40 object-contain mx-auto" />
      <h3 className="mt-2 font-semibold line-clamp-2">{product.title}</h3>
      <p className="text-sm text-gray-500">{product.category}</p>
      <p className="font-bold">${product.price}</p>
      <div className="flex flex-col ">
        {!currentQuantity > 0 ? (
          <Button
            type="primary"
            onClick={() => {
              dispatch(addToCart(product));
            }}
          >
            Add to Cart
          </Button>
        ) : (
          <DeleteItem orderId={product.id}>Delete </DeleteItem>
        )}

        <Button to={`/product/${product.id}`} type="black">
          View Details
        </Button>
      </div>
    </div>
  );
}
