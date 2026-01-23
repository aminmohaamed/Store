import { getCurrentQuantityById } from "./cartSlice";
import UpdateQuantity from "../cart/UpdateQuantity";
import { useSelector } from "react-redux";
import DeleteItem from "./DeleteItem";

function CartItem({ item }) {
  const currentQuantity = useSelector(getCurrentQuantityById(item.id));
  return (
    <div key={item.id} className="flex items-center gap-4 border-b py-3">
      <img src={item.image} className="h-16" />

      <div className="flex-1">
        <p>{item.title}</p>
        <p>${item.price}</p>
      </div>
      <div className="flex items-center gap-2 sm:gap-8">
        <UpdateQuantity orderId={item.id} currentQuantity={currentQuantity} />
        <DeleteItem orderId={item.id}>Delete </DeleteItem>
      </div>
    </div>
  );
}

export default CartItem;
