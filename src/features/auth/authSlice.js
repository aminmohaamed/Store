import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const savedUser = JSON.parse(localStorage.getItem("user")) || null;
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ username, password }) => {
    if (username && password) {
      return { username };
    } else {
      throw new Error("Please enter your username and Passowrd to login");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: { user: savedUser, loading: false, error: null },
  reducers: {
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        localStorage.setItem("user", JSON.stringify(action.payload));
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
