import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/auth.slice";
import postReducer from "../slices/post.slice";
import commentReducer from "../slices/comment.slice";
import reactionReducer from "../slices/reaction.slice";
import connectionReducer from "../slices/connections.slice";
import profileReducer from "../slices/profile.slice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import roomReducer from "../slices/room.slice";
import messageReducer from "../slices/message.slice";
const combinedReducer = combineReducers({
  auth: authReducer,
  posts: postReducer,
  comments: commentReducer,
  reaction: reactionReducer,
  connections: connectionReducer,
  profile: profileReducer,
  room:roomReducer,
  message:messageReducer

});

const persistConfig = {
  key: "root",
  storage,
  blacklist: []
};
const persistedReducer = persistReducer(persistConfig, combinedReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
