import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/auth.slice";
import postSlice from "../slices/post.slice"
import commentSlice from "../slices/comment.slice"
import reactionSlice from "../slices/reaction.slice";
import connectionSlice  from "../slices/connections.slice";
export default configureStore({
  reducer: {
    auth: authReducer,
    posts: postSlice,
    comments:commentSlice,
    reaction:reactionSlice,
    connections:connectionSlice
  },
});
