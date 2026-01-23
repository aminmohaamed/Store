import { useEffect, useState } from "react";
import { createProduct, getCategories } from "../api/productsApi";
import ErrorMessage from "../components/ErrorMessage";
import { addProduct } from "../features/products/productsSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
const intialState = {
  title: "",
  description: "",
  price: "",
  category: "",
  image: "",
  id: Date.now(),
};
export default function CreateProductPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState(intialState);

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (
      !form.title ||
      !form.description ||
      !form.category ||
      !form.image ||
      Number(form.price) <= 0
    ) {
      return setError("All fields required and price must be positive");
    }

    try {
      setLoading(true);
      await createProduct(form);
      dispatch(addProduct(form));
      setSuccess(true);
      setForm(intialState);
      navigate("/product");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-xl font-bold mb-4">Create Product</h2>

      {error && <ErrorMessage message={error} />}
      {success && (
        <p className="text-green-600 mb-2">Product created successfully</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Title"
          className="input"
        />
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
          className="input"
        />
        <input
          name="price"
          type="number"
          value={form.price}
          onChange={handleChange}
          placeholder="Price"
          className="input"
        />

        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="input"
        >
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option key={category}>{category}</option>
          ))}
        </select>

        <input
          name="image"
          value={form.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="input"
        />

        <Button disabled={loading} type="black">
          {loading ? "Creating..." : "Create"}
        </Button>
      </form>
    </div>
  );
}
