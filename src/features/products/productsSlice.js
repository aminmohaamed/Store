import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const BASE_UEL = "https://fakestoreapi.com";
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await fetch(`${BASE_UEL}/products`);
    if (!res.ok) throw new Error("Failed to fetch products");
    return await res.json();
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    list: [],
    loading: false,
    error: null,
    sort: "none",
    page: 1,
    perPage: 10,
  },
  reducers: {
    setSort: (state, action) => {
      state.sort = action.payload;
      state.page = 1; // reset page
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    addProduct: (state, action) => {
      state.list.unshift(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setSort, setPage, addProduct } = productsSlice.actions;
export default productsSlice.reducer;
