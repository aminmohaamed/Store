import Button from "../../components/Button";
import { removeFromCart } from "./cartSlice";
import { useDispatch } from "react-redux";

function DeleteItem({ orderId, children }) {
  const dispatch = useDispatch();

  return (
    <Button type="primary" onClick={() => dispatch(removeFromCart(orderId))}>
      {children}
    </Button>
  );
}

export default DeleteItem;
