import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const signUpAction = "auth/signup";
const logInAction = "auth/login";
const logOutAction = "auth/logoutUser";

export const authUser = createAsyncThunk(
  signUpAction,
  async ({ email, password }, { rejectWithValue }) => {
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
      return rejectWithValue(error.response.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  logInAction,
  async ({ email, password }, { rejectWithValue }) => {
    console.log("email, password: ", email, password);
    try {
      const response = await axios.post(
        "http://localhost:4000/api/auth/login",
        {
          email,
          password,
        }
      );
      const data=response.data;
      console.log("response redux", response.data);
      console.log("error wala response",data.error)
      localStorage.setItem("logged", "true");
      localStorage.setItem("token", response.data.token);
      return data;
    } catch (error) {
      // console.log("error", error.response.data);
      // return rejectWithValue(error.message);
      if (error.response && error.response.status === 401) {
        return rejectWithValue({ success: false, message: "Invalid User or Password!" });
      } else {
        return rejectWithValue(error.message);
    }
    }}
);

export const logoutUser = createAsyncThunk(
  logOutAction,
  async (rejectWithValue) => {
    try {
      console.log("logout");
      localStorage.removeItem("logged");
      localStorage.removeItem("token");
      const response = await axios.post("http://localhost:4000/api/logout");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    error: null,
    success: false,
    logged: localStorage.getItem("logged") === "true",
    token: localStorage.getItem("token"),
  },
  reducers: {
    toggleSuccess: (state, action) => {
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(authUser.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
        console.log(" state", state.success);
      })
      .addCase(authUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.logged = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.logged = true;
        console.log("state", state.user);
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        console.log("error payload", action.payload);
        state.logged = false;
      })
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.logged = true;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        state.logged = false;
        state.token = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        console.log("error logout", state.error);
        state.logged = true;
      });
  },
});

export const { toggleSuccess } = authSlice.actions;
export default authSlice.reducer;
