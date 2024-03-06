import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/auth.slice";
import postSlice from "../slices/post.slice";
import commentSlice from "../slices/comment.slice";
import reactionSlice from "../slices/reaction.slice";
import connectionSlice from "../slices/connections.slice";
import profileSlice from "../slices/profile.slice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
const combinedReducer = combineReducers({
  auth: authReducer,
  posts: postSlice,
  comments: commentSlice,
  reaction: reactionSlice,
  connections: connectionSlice,
  profile: profileSlice,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ['comments',"connections"]
};
const persistedReducer = persistReducer(persistConfig, combinedReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
