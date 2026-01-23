import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, setSort } from "../features/products/productsSlice";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import Pagination from "../components/Pagination";
import ProductList from "../features/products/ProductList";
import CustomSelect from "../components/CustomSelect";

export default function ProductsPage() {
  const dispatch = useDispatch();
  const { list, loading, error, sort, page, perPage } = useSelector(
    (store) => store.products
  );

  useEffect(() => {
    if (list.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, list.length]);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;
  if (!list.length) return <ErrorMessage message={"No products found"} />;
  let sorted = [...list];
  if (sort === "price-asc") sorted.sort((a, b) => a.price - b.price);
  if (sort === "price-desc") sorted.sort((a, b) => b.price - a.price);
  if (sort === "category")
    sorted.sort((a, b) => a.category.localeCompare(b.category));

  const start = (page - 1) * perPage;
  const paginated = sorted.slice(start, start + perPage);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <CustomSelect
        value={sort}
        onChange={(val) => dispatch(setSort(val))}
        options={[
          { label: "No sorting", value: "none" },
          { label: "Price ↑", value: "price-asc" },
          { label: "Price ↓", value: "price-desc" },
          { label: "Category", value: "category" },
        ]}
      />

      <ProductList products={paginated} />

      <div className="mt-8 flex justify-center">
        <Pagination />
      </div>
    </div>
  );
}
