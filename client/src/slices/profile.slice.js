import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
const getUserProfile="getUserProfile/updateUser"
export const getUpdatedUserProfile = createAsyncThunk(
  getUserProfile,
  async (userId, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        `http://localhost:4000/api/users/${userId}`
      );
      return { userId, res };
    } catch (error) {
      console.log("errorrmgvdsfhdryjjkyuljk", error);

      return rejectWithValue(error.response.data);
    }
  }
);

export const profileSlice = createSlice({
    name: "profile",
    initialState: {
      content: {},
      loading: false,
      error: null,
      success: false,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getUpdatedUserProfile.pending, (state) => {
          state.loading = true;
        })
        .addCase(getUpdatedUserProfile.fulfilled, (state, action) => {
          const { data } = action.payload.res;
          state.loading = false;
          state.content = data;
        })
        .addCase(getUpdatedUserProfile.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error;
        });
    },
  });
  
  export default profileSlice.reducer;
  


