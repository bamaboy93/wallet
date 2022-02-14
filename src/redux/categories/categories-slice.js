import { createSlice } from "@reduxjs/toolkit";
import apiOperations from "./categories-operations";

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
    [apiOperations.getCategories.pending](state, action) {
      state.isLoading = true;
      state.error = false;
    },
    [apiOperations.getCategories.rejected](state, action) {
      state.isLoading = false;
      state.error = true;
    },
    [apiOperations.getCategories.fulfilled](state, action) {
      state.categories = action.payload.data;
      state.isLoading = false;
    },
    [apiOperations.getTransactionStats.pending](state, action) {
      state.isLoading = true;
      state.error = false;
    },
    [apiOperations.getTransactionStats.rejected](state, action) {
      state.isLoading = false;
      state.error = true;
    },
    [apiOperations.getTransactionStats.fulfilled](state, action) {
      state.transactionStats = action.payload.data;
      state.isLoading = false;
    },
  },
});
export default categoriesSlice.reducer;
