import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "./categories-operations";

const initialState = {
  categories: {},
  transactionStats: {},
  isLoading: false,
  error: false,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: {
    [getCategories.pending](state, action) {
      state.isLoading = true;
      state.error = false;
    },
    [getCategories.rejected](state, action) {
      state.isLoading = false;
      state.error = true;
    },
    [getCategories.fulfilled](state, action) {
      state.categories = action.payload.data.categories;
      state.isLoading = false;
    },
  },
});
export default categoriesSlice.reducer;
