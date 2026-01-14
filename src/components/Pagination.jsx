export default function Pagination({ total, page, onChange, perPage }) {
  const pages = Math.ceil(total / perPage);

  return (
    <div className="flex justify-center gap-2 mt-6">
      {Array.from({ length: pages }, (_, i) => (
        <button
          key={i}
          onClick={() => onChange(i + 1)}
          className={`px-3 py-1 border rounded cursor-pointer ${
            page === i + 1 ? "bg-black text-white" : ""
          }`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}
