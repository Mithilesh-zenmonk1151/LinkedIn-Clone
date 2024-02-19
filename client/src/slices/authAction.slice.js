import axios from "axios";
// import { logInAction, logOutAction, signUpAction } from "./authType";
import { createAsyncThunk } from "@reduxjs/toolkit";
const signUpAction='auth/signup' 
 const logInAction='auth/login'
 const logOutAction='auth/logoutUser'
 export const authUser = createAsyncThunk(
  signUpAction,
  async ({ email, password }, { rejectValue }) => {
    try {
      const response = await axios.post("http://localhost:4000/api", {
        email,
        password,
      });
      return response.data;
    } catch (error) {
      console.log("error", error.response.data);
      return rejectValue(error.response.data);
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
    } catch (error) {
      console.log("error", error.response.data);
      return rejectWithValue(error.message);
    }
  }
);
export const logoutUser = createAsyncThunk(logOutAction, async () => {
  try {
    console.log("logout");
    localStorage.removeItem("logged");
    localStorage.removeItem("token");
    const response = await axios.post("http://localhost:8080/logout");
    return response.data;
  } catch (error) {
    return error.message;
  }
});
