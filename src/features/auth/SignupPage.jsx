import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "./authSlice";

export default function SignupPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    if (!username || !password) return;

    const res = await dispatch(loginUser({ username, password }));
    if (res.meta.requestStatus === "fulfilled") navigate("/product");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-purple-500 via-pink-500 to-red-500">
      <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Sign Up
        </h2>
        <form onSubmit={submit} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-purple-600 text-white font-bold py-3 rounded-lg hover:bg-purple-700 transition"
          >
            Create Account
          </button>
        </form>
        <p className="text-center text-gray-500 mt-4">
          Already have an account?{" "}
          <span
            className="text-purple-600 cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}
