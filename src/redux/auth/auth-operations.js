import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../assets/constants";

import toast from "react-hot-toast";
axios.defaults.baseURL = BASE_URL;

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const signUp = createAsyncThunk(
  "auth/signup",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post("api/users/signup", credentials);

      toast.success(
        "Thank you for signing up! We have sent you an email with a link to verify your account."
      );
      return data;
    } catch ({ response }) {
      toast.error(response.data.message);
      return thunkAPI.rejectWithValue();
    }
  }
);

const logIn = createAsyncThunk("auth/login", async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post("api/users/login", credentials);
    token.set(data.data.token);
    toast.success("Welcome to your Wallet!");
    return data;
  } catch ({ response }) {
    if (response.data.message === "User email not verified yet.") {
      toast.error(response.data.message);
    } else {
      toast.error(response.data.message);
    }
    return thunkAPI.rejectWithValue();
  }
});

const logInByGoogle = createAsyncThunk(
  "auth/loginByGoogle",
  async (extractedToken, thunkAPI) => {
    try {
      const { data } = await axios.post("api/users/loginByGoogle", {
        token: extractedToken,
      });
      token.set(data.data.token);
      toast.success("Welcome to your Wallet!");
      return data;
    } catch ({ response }) {
      if (response.data.message === "User email not verified yet.") {
        toast.error(response.data.message);
      } else {
        toast.error(response.data.message);
      }
      return thunkAPI.rejectWithValue();
    }
  }
);

const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("api/users/logout");
    token.unset();
  } catch (error) {
    if (error.response.statusText === "Unauthorized") {
      window.location.reload();
    }
    return thunkAPI.rejectWithValue();
  }
});

const refreshCurrentUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;
      if (persistedToken === null) {
        return thunkAPI.rejectWithValue();
      }
      token.set(persistedToken);
      const res = await axios.get("api/users/current");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

const authOperations = {
  signUp,
  logIn,
  logOut,
  refreshCurrentUser,
  logInByGoogle,
};

export default authOperations;
