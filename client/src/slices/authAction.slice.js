import axios from "axios";
// import { logInAction, logOutAction, signUpAction } from "./authType";
import { createAsyncThunk } from "@reduxjs/toolkit";
const signUpAction = "auth/signup";
const logInAction = "auth/login";
const logOutAction = "auth/logoutUser";
export const authUser = createAsyncThunk(
  signUpAction,
  async ({ email, password }, { rejectValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/auth/signup",
        {
          email,
          password,
        }
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log("error", error.response.data);
      alert("api not hitted");
      return rejectValue(error.response.data);
    }
  }
);
export const loginUser = createAsyncThunk(
  logInAction,
  async ({ email, password }, { rejectValue }) => {
    console.log("email, password: ", email, password);
    try {
      const response = await axios.post(
        "http://localhost:4000/api/auth/login",
        {
          email,
          password,
        }
      );
      console.log("response redux", response.data);
      localStorage.setItem("logged", "true");
      localStorage.setItem("token", response.data.token);
      return response.data;
    } catch (error) {
      console.log("error", error.response.data);
      return rejectValue(error.message);
    }
  }
);
export const logoutUser = createAsyncThunk(logOutAction, async () => {
  try {
    console.log("logout");
    localStorage.removeItem("logged");
    localStorage.removeItem("token");
    const response = await axios.post("http://localhost:4000/api/logout");
    return response.data;
  } catch (error) {
    return error.message;
  }
});
