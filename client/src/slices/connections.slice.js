import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const getConnectionSuggestions = createAsyncThunk(
  "getSuggestions",
  async (inputs, { rejectedWithValue }) => {
    try {
      const head = {
        header: {
          Athorization: `Bearer&{token}`,
        },
      };
      const response = await axios.get(
        "http://localhost:4000/api/my-connections/suggestions",
        inputs,
        head
      );
      const data = response.data;
      return data;
    } catch (error) {
      console.log(error);
      return rejectedWithValue(error.response.data);
    }
  }
);
export const connectionSlice = createSlice({
  name: "suggestion",
  initialState: {
    content: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getConnectionSuggestions.pending, (state) => {
      state.isLoading = false;
    });
    builder.addCase(getConnectionSuggestions.fulfilled, (state, action) => {
      state.isLoading = false;
      state.content = action.payload;
    });
    builder.addCase(getConnectionSuggestions.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});
export default connectionSlice.reducer;
