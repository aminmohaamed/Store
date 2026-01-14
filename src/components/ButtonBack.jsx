import { useNavigate } from "react-router-dom";

function ButtonBack() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/product")}
      className="border px-4 py-2 rounded cursor-pointer"
    >
      Back
    </button>
  );
}

export default ButtonBack;
