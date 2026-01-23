import { useDispatch } from "react-redux";
import Button from "../../components/Button";
import { decreaseQuantity, increaseQuantity } from "./cartSlice";
function UpdateQuantity({ orderId, currentQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button type="round" onClick={() => dispatch(decreaseQuantity(orderId))}>
        -
      </Button>
      <span className="m-2 rounded-md border border-stone-300 px-2 py-1 text-sm font-semibold">
        {currentQuantity}
      </span>
      <Button type="round" onClick={() => dispatch(increaseQuantity(orderId))}>
        +
      </Button>
    </div>
  );
}

export default UpdateQuantity;
