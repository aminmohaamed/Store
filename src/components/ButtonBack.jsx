import { useNavigate } from "react-router-dom";
import Button from "./Button";

function ButtonBack() {
  const navigate = useNavigate();
  return (
    <Button type="secoundray" onClick={() => navigate("/product")}>
      Back
    </Button>
  );
}

export default ButtonBack;
