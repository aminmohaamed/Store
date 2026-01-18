import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../features/products/productsSlice";
function Pagination() {
  const dispatch = useDispatch();
  const { list, page, perPage } = useSelector((store) => store.products);

  return (
    <div className="flex justify-center gap-2 mt-6">
      {Array.from({ length: list.length / perPage }, (_, i) => (
        <button
          key={i}
          className={`px-3 py-1 border rounded cursor-pointer ${
            page === i + 1 ? "bg-black text-white" : ""
          }`}
          onClick={() => dispatch(setPage(i + 1))}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
