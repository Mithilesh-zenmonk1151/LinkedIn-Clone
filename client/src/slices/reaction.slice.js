import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
export const postReactionUser = createAsyncThunk(
  "postReactionUserAction",
  async (data, { rejectWithValue, getState }) => {
    const reactionData = { label: data.label, postId: data.postId };
    try {
      const token = getState().auth.token;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.post(
        `http://localhost:4000/api/reactions/${data.postId}`,
        reactionData,
        config
      );
      console.log("response: ", response);
      return response;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
export const getReactionUser = createAsyncThunk(
  "getReactionAction",
  async (postId) => {
    const res = await axios.get(
      `http://localhost:4000/api/reactions/${postId}`
    );
    const data = res.data;
    return data;
  }
);
export const reactionSlice = createSlice({
  name: "reaction",
  initialState: {
    loading: false,
    error: null,
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postReactionUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postReactionUser.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
        console.log(" state", state.success);
      })
      .addCase(postReactionUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        console.log("error", state.error);
      })
      .addCase(getReactionUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getReactionUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        console.log("action", state.data);
      })
      .addCase(getReactionUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export default reactionSlice.reducer;
