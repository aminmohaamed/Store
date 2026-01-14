const BASE = "https://fakestoreapi.com";

export const getProducts = async () => {
  const res = await fetch(`${BASE}/products`);
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
};

export const getProductById = async (id) => {
  const res = await fetch(`${BASE}/products/${id}`);
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
};

export const getCategories = async () => {
  const res = await fetch(`${BASE}/products/categories`);
  if (!res.ok) throw new Error("Failed to fetch categories");
  return res.json();
};

export const createProduct = async (data) => {
  const res = await fetch(`${BASE}/products`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Failed to create product");
  return res.json();
};
