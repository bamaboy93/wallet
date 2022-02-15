import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../assets/constants";
axios.defaults.baseURL = BASE_URL;

export const getCategories = createAsyncThunk(
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
