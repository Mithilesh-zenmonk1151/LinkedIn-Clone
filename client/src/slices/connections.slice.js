import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


 const connectionPostAction='connection/connectionUser' 
 const connectionFetchAction='connection/fetchconnectionUser' 
 const suggestionFetchAction='connection/fetchsuggestionUser' 
 const connectionUpdateAction='connection/updateconnectionUser'

export const connectionUser = createAsyncThunk(
  connectionPostAction,
  async (id, { rejectWithValue, getState }) => {
    try {
      const token = getState().auth.token;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.post(
        `http://localhost:4000/api/my-connections/${id}`,
        null,
        config
      );

      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const fetchconnectionUser = createAsyncThunk(
  connectionFetchAction,
  async ({ rejectWithValue, getState }) => {
    try {
      const token = localStorage.getItem("token");
      console.log("hekko");

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.get(
        `http://localhost:4000/api/my-connections/connections`,
        config
      );
      console.log("response: ", response);

      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
export const fetchsuggestionUser = createAsyncThunk(
  suggestionFetchAction,
  async ({ rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.get(
        `http://localhost:4000/api/my-connections/suggestions`,
        config
      );
      console.log("suggestion request response", response);

      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
export const updateconnectionUser = createAsyncThunk(
  connectionUpdateAction,
  async (data, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      console.log("connectionId: ", data.status);

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.put(
        `http://localhost:4000/api/my-connections/${data.connectionId}`,
        data.status,
        config
      );
      const connectionId = data.connectionId;
      const info = response.data;
      return { connectionId, info };
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const connectionSlice = createSlice({
  name: "connection",
  initialState: {
    connectiondata:{},
      acceptedData:[],
      requestData:[],
      suggestiondata:{},
      updateState:false,
      StatusData:{},
      loading: false,
      error: null,
      success:false,
      suggestionstate:false,
      connectionstate:false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder .addCase(connectionUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(connectionUser.fulfilled, (state) => {
      state.loading = false;
      state.success=true;
      state.connectionstate=true;
      console.log(' state' , state.success)
      
    })
    .addCase(connectionUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      console.log("errorrrr" , state.error)
    })
    .addCase(fetchconnectionUser.pending, (state) => {
      state.loading = true;
      state.error = null;
   
    })
    .addCase(fetchconnectionUser.fulfilled, (state,action) => {
      state.loading = false;
      state.connectiondata=action.payload
      state.acceptedData = state.connectiondata['Accepted'];
      state.requestData = state.connectiondata['Pending'];
      console.log('request data: ', state.acceptedData);
      
    
    })
    .addCase(fetchconnectionUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
     
    })
    .addCase(fetchsuggestionUser.pending, (state) => {
        state.loading = true;
        state.error = null;
     
      })
      .addCase(fetchsuggestionUser.fulfilled, (state,action) => {
        state.loading = false;
        state.suggestiondata=action.payload;
        state.suggestionstate=true;
        console.log('suggestiondata: ', state?.suggestiondata);
     
      
      })
      .addCase(fetchsuggestionUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
       
      })
      .addCase(updateconnectionUser.pending, (state) => {
        state.loading = true;
        state.error = null;
     
      })
      .addCase(updateconnectionUser.fulfilled, (state,action) => {
        state.loading = false;
        state.StatusData=action.payload;
        state.updateState=true;
        console.log('suggestiondata: ', state.StatusData);
        const data = state.requestData.filter((item) => item?._id !== action.payload.connectionId)
        state.requestData = data;
     
      
      })
      .addCase(updateconnectionUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
       
      })
      
  },
});
export default connectionSlice.reducer;
