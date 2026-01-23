import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/authSlice";

export default function Navbar() {
  const { user } = useSelector((store) => store.auth);
  const cartCount = useSelector((store) => store.cart.items.length);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md transition font-medium ${
      isActive
        ? "bg-green-500 text-white"
        : "text-gray-600 hover:bg-gray-100 hover:text-black"
    }`;

  return (
    <nav className="bg-stone-200 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <NavLink to="/" className="flex items-center gap-2">
          <span className="font-bold text-lg text-gray-700 hidden sm:block">
            MyStore
          </span>
        </NavLink>

        <div className="flex items-center gap-3">
          <NavLink to="/cart" className={linkClass}>
            Cart
            {cartCount > 0 && (
              <span className="ml-1 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </NavLink>

          <NavLink to="/create" className={linkClass}>
            Create
          </NavLink>

          {user ? (
            <div className="flex items-center gap-3 ml-2">
              <span className="text-gray-700 text-sm">
                Hi, <b>{user.username}</b>
              </span>
              <button
                onClick={() => {
                  dispatch(logout());
                  navigate("/");
                }}
                className="text-red-500 hover:text-red-700 font-medium"
              >
                Logout
              </button>
            </div>
          ) : (
            <NavLink to="/login" className={linkClass}>
              Login
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
}
