import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../assets/constants";
axios.defaults.baseURL = BASE_URL;

const setAvatar = createAsyncThunk(
  "avatar/setAvatar",
  async (avatarFile, thunkAPI) => {
    try {
      const { data } = await axios.patch("api/users/avatar", avatarFile);
      return data.data.avatar;
    } catch (error) {
      if (error.response.statusText === "Unauthorized") {
        window.location.reload();
      }
      return thunkAPI.rejectWithValue();
    }
  }
);

const avatarOperations = {
  setAvatar,
};
export default avatarOperations;
