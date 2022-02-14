import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../assets/constants";
axios.defaults.baseURL = BASE_URL;

const changeUserName = createAsyncThunk(
  "user/changeUserName",
  async (name, thunkAPI) => {
    try {
      const { data } = await axios.patch("api/users", { name });
      return data.data.name;
    } catch (error) {
      if (error.response.statusText === "Unauthorized") {
        window.location.reload();
      }
      return thunkAPI.rejectWithValue();
    }
  }
);

const userOperations = {
  changeUserName,
};
export default userOperations;
