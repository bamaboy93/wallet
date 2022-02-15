import axios from "axios";
import { BASE_URL } from "../../assets/constants";

import {
  getCategoriesRequest,
  getCategoriesSuccess,
  getCategoriesError,
} from "./categoriesActions";

axios.defaults.baseURL = BASE_URL;

export const getCategories = () => async (dispatch) => {
  dispatch(getCategoriesRequest());
  try {
    const { data } = await axios.get("/categories/all");
    dispatch(getCategoriesSuccess(data));
  } catch (error) {
    dispatch(getCategoriesError(error.message));
  }
};
