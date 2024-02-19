import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/auth.slice";
import postReducer from "../slices/post.slice"
export default configureStore({
  reducer: {
    auth: authReducer,
    posts: postReducer
  },
});
