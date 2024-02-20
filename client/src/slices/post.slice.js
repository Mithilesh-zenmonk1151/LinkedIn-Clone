import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
export const getPosts = createAsyncThunk("posts/fetchPosts", async (inputs) => {
  try {
    const response = await axios.get("http://localhost:4000/api/posts",inputs );
    console.log(response);
    const data = response.data;
    console.log("post get data",data)
    return data;
    
  } catch (error) {
    console.log("error", error.response.data);
    return inputs(error.response.data);
  }
});

export const postSlice = createSlice({
  name: "posts",
  initialState: {
    content: [],
    isLoading: false,
    error: null,
    
  },
  reducers: {},
  extraReducers: (builder) => {
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
