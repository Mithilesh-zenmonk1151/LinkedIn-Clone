import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
const addPostAction = "/posts";
const getPosts= "/posts"


export const createPosts = createAsyncThunk(
  addPostAction,
  async ({userId , title,body,images }, { rejectValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/posts",
        {
          userId,
          title,
          body,
          images
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

export const getPost= createAsyncThunk(
  getPosts,
  async({userId,title,body,image},{rejectValue}) => {
    console.log("posts data -->>", userId,title,body,image);
    try{
      const response= await axios.get("http://localhost:4000/api/posts");
       console.log(response.data);

      return response.data;

    }
    catch(error){
      console.log("error", error.response.data);
      return rejectValue(error.response.data);

    }
  
  }
  )
