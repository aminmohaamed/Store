import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity } from "./cartSlice";
import ButtonBack from "../../components/ButtonBack";

export default function CartPage() {
  const { items } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (!items.length) return <p className="text-center mt-10">Cart is empty</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>

      {items.map((item) => (
        <div key={item.id} className="flex items-center gap-4 border-b py-3">
          <img src={item.image} className="h-16" />

          <div className="flex-1">
            <p>{item.title}</p>
            <p>${item.price}</p>
          </div>

          <input
            type="number"
            min="1"
            value={item.quantity}
            onChange={(e) =>
              dispatch(
                updateQuantity({
                  id: item.id,
                  quantity: Number(e.target.value),
                })
              )
            }
            className="border w-16 p-1"
          />

          <button
            onClick={() => dispatch(removeFromCart(item.id))}
            className="text-red-500 cursor-pointer"
          >
            Remove
          </button>
        </div>
      ))}

      <h3 className="text-right mt-4 font-bold">Total: ${total.toFixed(2)}</h3>
      <ButtonBack />
    </div>
  );
}
