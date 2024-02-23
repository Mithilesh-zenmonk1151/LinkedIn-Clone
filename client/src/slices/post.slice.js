import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (inputs, { rejectWithValue, getState }) => {
    try {
      const head = {
        header: {
          Athorization: `Bearer&{token}`,
        },
      };
      const response = await axios.get(
        "http://localhost:4000/api/posts",
        inputs,
        head
      );
      console.log(response);
      const data = response.data;
      console.log("post get data", data);
      return data;
    } catch (error) {
      console.log("error", error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export const createPosts = createAsyncThunk(
  "posts/createPosts",
  async (data, { rejectWithValue }) => {
    console.log("formdat",(data.getAll('images')));
    try {
      const formData = {
        'body': data.get('body'),
        'images': data.getAll('images'),
        'title': data.get('title')
      }
      const response = await axios.post(
        "http://localhost:4000/api/posts",
        formData,
        {
          header: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("response from create", response.data);
      return response.data;
    } catch (error) {
      console.log("error", error.response.data);
      alert("api not hitted");
      return rejectWithValue(error.response.data);
    }
  }
);

export const postSlice = createSlice({
  name: "posts",
  initialState: {
    content: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createPosts.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(createPosts.fulfilled, (state) => {
      state.isLoading = false;
      state.success = true;
      console.log(" state", state.success);
    });
    builder.addCase(createPosts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(getPosts.pending, (state) => {
      state.isLoading = false;
    });
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.content = action.payload;
    });
    builder.addCase(getPosts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export default postSlice.reducer;
