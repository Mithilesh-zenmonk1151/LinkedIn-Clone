import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
const addPostAction = "/posts";

export const createPosts = createAsyncThunk(
  addPostAction,
  async ({ userId, title, body, images }, { rejectValue }) => {
    try {
      const response = await axios.post("http://localhost:4000/api/posts", {
        userId,
        title,
        body,
        images,
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log("error", error.response.data);
      alert("api not hitted");
      return rejectValue(error.response.data);
    }
  }
);

export const getPost = createAsyncThunk("posts/fetchPosts", async (inputs) => {
 
  try {
    const response = await axios.get("http://localhost:4000/api/posts", inputs);
    console.log(response.data);
    const data = response.data;
    return data;
  } catch (error) {
    console.log("error", error.response.data);
    return inputs(error.response.data);
  }
});
