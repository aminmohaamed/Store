import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "mt-2 inline-block rounded-lg  text-sm font-semibold uppercase tracking-wide transition-all duration-300 text-white  focus:outline-none focus:ring-2 px-4 py-3  focus:ring-offset-2 disabled:cursor-not-allowed cursor-pointer ";
  const styles = {
    primary:
      base +
      " w-full px-3 py-1 sm:px-6 sm:py-4 bg-green-600 hover:bg-green-700 hover:text-white focus:ring-green-400 disabled:bg-green-300 active:bg-green-800  disabled:text-green-100 disabled:hover:bg-green-300",
    small:
      base +
      " px-4 py-2 sm:px-5 sm:py-2.5 text-xs bg-green-600 hover:bg-green-700 hover:text-white focus:ring-green-400 disabled:bg-green-300 active:bg-green-800  disabled:text-green-100 disabled:hover:bg-green-300",
    black: base + "bg-black text-white px-4 py-3 rounded w-full",
    secoundray:
      "duration-3 text-sm inline-block rounded-full  border-2 border-stone-400 font-semibold uppercase tracking-wide text-stone-400 transition-colors hover:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-200 focus:text-stone-800 focus:ring-offset-2 disabled:cursor-not-allowed px-3 py-2.5 sm:px-6 sm:py-4 md:py-3.5 hover:text-stone-800",
    round:
      base +
      " px-2.5 py-1 sm:px-3.5 sm:py-2 text-sm bg-green-600 hover:bg-green-700 hover:text-white focus:ring-green-400 disabled:bg-green-300 active:bg-green-800  disabled:text-green-100 disabled:hover:bg-green-300",
    select:
      "w-full bg-white border border-gray-300 rounded-lg p-2 flex justify-between items-center shadow-sm focus:outline-none",
  };
  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  if (onClick)
    return (
      <button className={styles[type]} disabled={disabled} onClick={onClick}>
        {children}
      </button>
    );
  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
