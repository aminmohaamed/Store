import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "./authSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "../../components/Button";

export default function LoginPage() {
  const [form, setForm] = useState({ username: "", password: "" });
  const { loading, error } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    const res = await dispatch(loginUser(form));
    if (res.meta.requestStatus === "fulfilled") navigate("/product");
  };

  return (
    <div className="max-w-sm mx-auto p-6  ">
      <h2 className="text-xl font-bold mb-4">Login</h2>

      {error && <p className="text-red-500">{error}</p>}

      <form onSubmit={submit} className="space-y-3">
        <input
          placeholder="Username"
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition"
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />

        <input
          placeholder="Password"
          type="password"
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <Button disabled={loading} type="primary">
          {loading ? "Loading..." : "Login"}
        </Button>
      </form>
    </div>
  );
}
