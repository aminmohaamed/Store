import { createSlice } from "@reduxjs/toolkit";

const saved = JSON.parse(localStorage.getItem("cart")) || [];

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: saved },
  reducers: {
    addToCart: (state, action) => {
      const exists = state.items.find((item) => item.id === action.payload.id);
      if (exists) {
        exists.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    updateQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) item.quantity = action.payload.quantity;
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.setItem("cart", JSON.stringify([]));
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
