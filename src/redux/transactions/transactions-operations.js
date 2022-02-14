import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../assets/constants";
axios.defaults.baseURL = BASE_URL;

const setToken = (token) => {
  if (!axios.defaults.headers.common.Authorization)
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const getTransactionOperation = createAsyncThunk(
  "transactions/getFinance",

  async ({ token, page }, thunkAPI) => {
    try {
      setToken(token);
      const { data } = await axios.get(
        `api/transactions?limit=5&page=${page}&sortByDesc=date%7CcreatedAt`
      );
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

const addTransaction = createAsyncThunk(
  "transactions/addTransaction",
  async ({ values, page, thunkAPI }) => {
    try {
      const { data } = await axios.post(
        `api/transactions?limit=5&page=${page}&sortByDesc=date%7CcreatedAt`,
        values
      );
      return data.data;
    } catch (error) {
      if (error.response.statusText === "Unauthorized") {
        window.location.reload();
      }
      return thunkAPI.rejectWithValue();
    }
  }
);

const deleteTransaction = createAsyncThunk(
  "transactions/deleteContact",
  async ({ operationId, page, thunkAPI }) => {
    try {
      const { data } = await axios.delete(
        `api/transactions/${operationId}?limit=5&page=${page}&sortByDesc=date%7CcreatedAt`
      );
      return data.data;
    } catch (error) {
      if (error.response.statusText === "Unauthorized") {
        window.location.reload();
      }
      return thunkAPI.rejectWithValue();
    }
  }
);

const editTransaction = createAsyncThunk(
  "transactions/editContact",
  async ({ operationId, values, page, thunkAPI }) => {
    try {
      const { data } = await axios.patch(
        `api/transactions/${operationId}?limit=5&page=${page}&sortByDesc=date%7CcreatedAt`,
        values
      );
      return data.data;
    } catch (error) {
      if (error.response.statusText === "Unauthorized") {
        window.location.reload();
      }
      return thunkAPI.rejectWithValue();
    }
  }
);

export {
  getTransactionOperation,
  addTransaction,
  editTransaction,
  deleteTransaction,
};
