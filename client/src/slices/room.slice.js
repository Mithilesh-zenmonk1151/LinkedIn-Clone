import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

import { createAsyncThunk } from "@reduxjs/toolkit";
const RoomUserAction='room/postRoomUser' 
 const RoomFetchAction='room/fetchRoomUser'

 export const postRoomUser = createAsyncThunk(
    RoomUserAction,
    async (receiverId, { rejectWithValue, getState }) => {


        try {
            const token = getState().auth.token;
            const config = {
                headers: {
                    'authorization': `Bearer ${token}`
                }
            };
            const response = await axios.post(`http://localhost:4000/roomCreate`, receiverId, config);

            console.log('response: ', response);
            return response;
        }
        catch (err) {

            return rejectWithValue(err.response);


        }
    }
);
export const fetchRoomUser = createAsyncThunk(
    RoomFetchAction,
    async ({ rejectWithValue }) => {

        
        try {
            const token = localStorage.getItem('token')
            
            console.log('hhhhh')

            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            };
            const response = await axios.get(`http://localhost:4000/roomGet`, config);

            console.log('response: ', response);
            return response;
        }
        catch (err) {

            return rejectWithValue(err.response);


        }
    }
);
export const roomSlice = createSlice({
    name: 'room',
    initialState: {
      loading: false,
      error: null,
      success:false,
    
      roomdata:{}
    },
    reducers: {
     
    },
    extraReducers: (builder) => {
      builder
        .addCase(postRoomUser.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(postRoomUser.fulfilled, (state,action) => {
          console.log('action: ', action.payload);
          state.loading = false;
          state.success=true; 
        

        })
        .addCase(postRoomUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
          console.log("errorrrr" , state.error)
        })
        .addCase(fetchRoomUser.pending, (state) => {
          state.loading = true;
          state.error = null;
       
        })
        .addCase(fetchRoomUser.fulfilled, (state,action) => {
          state.loading = false;
          state.roomdata = action.payload.data;
          console.log("action of room",state.roomdata.data)
          
        
        })
        .addCase(fetchRoomUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
         
        })
     
       
    },
  });

  export default roomSlice.reducer;