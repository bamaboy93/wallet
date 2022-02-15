import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  getCategoriesRequest,
  getCategoriesSuccess,
  getCategoriesError,
} from "./categoriesActions";

const all = createReducer([], {
  [getCategoriesSuccess]: (_, { payload }) => payload.data.categories,
});

const loading = createReducer(false, {
  [getCategoriesRequest]: () => true,
  [getCategoriesError]: () => false,
  [getCategoriesSuccess]: () => false,
});

const error = createReducer(null, {
  [getCategoriesError]: (_, { payload }) => payload,
  [getCategoriesRequest]: () => null,
});

export default combineReducers({
  all,
  loading,
  error,
});
