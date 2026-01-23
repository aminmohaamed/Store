import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "./authSlice";
import Button from "../../components/Button";

export default function SignupPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error } = useSelector((store) => store.auth);
  const submit = async (e) => {
    e.preventDefault();

    const res = await dispatch(loginUser({ username, password }));
    if (res.meta.requestStatus === "fulfilled") navigate("/product");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-green-600 via-green-700 to-green-900">
      <div className="bg-white/95 backdrop-blur p-10 rounded-3xl shadow-2xl w-full max-w-md border border-green-100">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-2">
          Create Account
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Join Fast Pizza 🍕 and start ordering
        </p>
        {error && <p className="text-red-500">{error}</p>}

        <form onSubmit={submit} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button type="primary">Create Account</Button>
        </form>

        <p className="text-center text-gray-500 mt-6">
          Already have an account?{" "}
          <span
            className="text-green-600 font-semibold cursor-pointer hover:text-green-800 transition"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}
