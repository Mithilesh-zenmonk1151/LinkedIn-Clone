import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/auth.slice";
import postSlice from "../slices/post.slice"
export default configureStore({
  reducer: {
    auth: authReducer,
    posts: postSlice
  },
});
