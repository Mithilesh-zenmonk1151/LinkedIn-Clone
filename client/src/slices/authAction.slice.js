import axios from "axios";
import { logInAction, logOutAction, signUpAction } from "./authType";
import { createAsyncThunk } from "@reduxjs/toolkit";
export const authUser = createAsyncThunk(
  signUpAction,
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post("http://localhost:8080/api", {
        email,
        password,
      });

      return response.data;
    } catch (err) {
      console.log("errpor", err.response.data);
      return rejectWithValue(err.response.data);
    }
  }
);
export const loginUser = createAsyncThunk(
  logInAction,
  async ({ email, password }, { rejectWithValue }) => {
    console.log("email, password: ", email, password);
    try {
      const response = await axios.post("http://localhost:8080/api", {
        email,
        password,
      });
      console.log("response redux", response.data);
      localStorage.setItem("logged", "true");
      localStorage.setItem("token", response.data.token);
      return response.data;
    } catch (err) {
      console.log("error", err.response.data);
      return rejectWithValue(err.message);
    }
  }
);
export const logoutUser = createAsyncThunk(logOutAction, async () => {
  try {
    console.log("logout");
    localStorage.removeItem("logged"); // Remove logged state from local storage
    localStorage.removeItem("token");
    const response = await axios.post("http://localhost:8080/logout");
    return response.data;
  } catch (err) {
    return err.message;
  }
});
