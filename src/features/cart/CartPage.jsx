import { useSelector } from "react-redux";

import ButtonBack from "../../components/ButtonBack";
import CartItem from "./CartItem";

export default function CartPage() {
  const { items } = useSelector((store) => store.cart);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (!items.length) return <p className="text-center mt-10">Cart is empty</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>

      {items.map((item) => (
        <CartItem item={item} key={item.id} />
      ))}

      <h3 className="text-right mt-4 font-bold">Total: ${total.toFixed(2)}</h3>
      <ButtonBack />
    </div>
  );
}
