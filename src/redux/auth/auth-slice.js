import { createSlice } from "@reduxjs/toolkit";
import authOperations from "./auth-operations";
import avatarOperations from "../avatar/avatar-operations";
import userOperations from "../../redux/user/user-operations";
import {
  addTransaction,
  editTransaction,
  deleteTransaction,
} from "../../redux/transactions/transactions-operations";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  error: null,
  isLoading: false,
  balance: null,
  avatarUrl: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoader: (state, action) => {
      state.isLoading = true;
    },
    unsetLoader: (state, action) => {
      state.isLoading = false;
    },
  },
  extraReducers: {
    [authOperations.signUp.pending](state, action) {
      state.isLoading = true;
      state.error = false;
    },
    [authOperations.signUp.rejected](state, action) {
      state.isLoading = false;
      state.error = true;
    },
    [authOperations.signUp.fulfilled](state, action) {
      state.isLoading = false;
    },
    [authOperations.logIn.pending](state, action) {
      state.isLoading = true;
      state.error = false;
    },
    [authOperations.logIn.rejected](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error = true;
    },
    [authOperations.logIn.fulfilled](state, action) {
      state.user = {
        name: action.payload.data.name,
        email: action.payload.data.email,
      };
      state.token = action.payload.data.token;
      state.balance = action.payload.data.balance;
      state.avatarUrl = action.payload.data.avatar;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [authOperations.logInByGoogle.pending](state, action) {
      state.isLoading = true;
      state.error = false;
    },
    [authOperations.logInByGoogle.rejected](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error = true;
    },
    [authOperations.logInByGoogle.fulfilled](state, action) {
      state.user = {
        name: action.payload.data.name,
        email: action.payload.data.email,
      };
      state.token = action.payload.data.token;
      state.balance = action.payload.data.balance;
      state.avatarUrl = action.payload.data.avatar;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [authOperations.logOut.pending](state) {
      state.isLoading = true;
      state.error = false;
    },
    [authOperations.logOut.rejected](state) {
      state = {
        ...state,
        isLoading: false,
        error: true,
      };
    },
    [authOperations.logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    [authOperations.refreshCurrentUser.pending](state, _) {
      state.isLoading = true;
    },
    [authOperations.refreshCurrentUser.rejected](state, _) {
      state.isLoggedIn = false;
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoading = false;
    },
    [authOperations.refreshCurrentUser.fulfilled](state, action) {
      state.user = action.payload.data;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [addTransaction.fulfilled](state, action) {
      state.balance = action.payload.balance;
      state.isLoading = false;
    },
    [editTransaction.fulfilled](state, action) {
      state.balance = action.payload.newBalance;
      state.isLoading = false;
    },
    [deleteTransaction.fulfilled](state, action) {
      state.balance = action.payload.newBalance;
      state.isLoading = false;
    },
    [avatarOperations.setAvatar.pending](state, action) {
      state.isLoading = true;
      state.error = false;
    },
    [avatarOperations.setAvatar.fulfilled](state, action) {
      state.isLoading = false;
      state.avatarUrl = action.payload;
    },
    [avatarOperations.setAvatar.rejected](state, action) {
      state.isLoading = false;
      state.error = true;
    },
    [userOperations.changeUserName.pending](state, action) {
      state.isLoading = true;
      state.error = false;
    },
    [userOperations.changeUserName.fulfilled](state, action) {
      state.isLoading = false;
      state.user = { ...state.user, name: action.payload };
    },
    [userOperations.changeUserName.rejected](state, action) {
      state.isLoading = false;
      state.error = true;
    },
  },
});

export const { setLoader, unsetLoader } = authSlice.actions;
export default authSlice.reducer;
