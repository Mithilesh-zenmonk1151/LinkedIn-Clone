import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getMessages = createAsyncThunk(
  "messages/getMessages",
  async (inputs, { rejectWithValue }) => {
    try {
      const head = {
        header: {
          Athorization: `Bearer&{token}`,
        },
      };
      const response = await axios.get(
        `http://localhost:4000/api/messages/${chatId}`,
        inputs,
        head
      );
      console.log("response message",response);
      const data = response.data;
      return data;
    } catch (error) {
      console.log("error", error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export const sendMessage = createAsyncThunk(
  "messages/sendMessage",
  async (formData, { rejectWithValue }) => {
  
    try {
      const response = await axios.post(
        "http://localhost:4000/api/message",
        formData,
        {
          header: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("response from create", response.data);
      return response.data;
    } catch (error) {
      console.log("error", error.response.data);
      alert("api not hitted");
      return rejectWithValue(error.response.data);
    }
  }
);

export const mesageSlice = createSlice({
  name: "message",
  initialState: {
    content: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(sendMessage.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(sendMessage.fulfilled, (state) => {
      state.isLoading = false;
      state.success = true;
      console.log(" state", state.success);
    });
    builder.addCase(sendMessage.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(getMessages.pending, (state) => {
      state.isLoading = false;
    });
    builder.addCase(getMessages.fulfilled, (state, action) => {
      state.isLoading = false;
      state.content = action.payload;
    });
    builder.addCase(getMessages.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export default mesageSlice.reducer;
