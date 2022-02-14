import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../assets/constants";
axios.defaults.baseURL = BASE_URL;

const getCategories = createAsyncThunk(
  "categories/getCategories",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("categories/all");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

const getTransactionStats = createAsyncThunk(
  "categories/getStats",
  async (params, thunkAPI) => {
    const { year, month } = params;

    try {
      const { data } = await axios.get("api/transactions/statistics", {
        params: {
          year,
          month,
        },
      });
      return data;
    } catch (error) {
      if (error.response.statusText === "Unauthorized") {
        window.location.reload();
      }
      return thunkAPI.rejectWithValue();
    }
  }
);

const apiOperations = {
  getCategories,
  getTransactionStats,
};
export default apiOperations;
