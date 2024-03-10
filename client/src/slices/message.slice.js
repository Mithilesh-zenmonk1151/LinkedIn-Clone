import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
const MessageFetchAction='message/fetchMessageUser'


export const fetchMessageUser = createAsyncThunk(
  MessageFetchAction,
  async (id,{ rejectWithValue,getState}) => {
    //  console.log('id: mm', id);

      const roomId=id;
      try {
          const token = getState().auth.token;
         // console.log('token: ', token);
       
          const config = {
              headers: {
                  'authorization': `Bearer ${token}`
              }
          };
          const response = await axios.get(`http://localhost:4000/allroommessages/${roomId}`, config);

         // console.log('response:messs ', response);
          return response;
      }
      catch (err) {

          return rejectWithValue(err.response);


      }
  }
);
export const messageSlice = createSlice({
  name: 'message',
  initialState: {
    loading: false,
    error: null,
    success:false,
  
    messageData:[]
  },
  reducers: {
   addNewMessages(state,action){
      state.messageData=[...state.messageData , action.payload]

   }
  },
  extraReducers: (builder) => {
    builder 
     .addCase(fetchMessageUser.pending, (state) => {
      state.loading = true;
      state.error = null;
   
    })
    .addCase(fetchMessageUser.fulfilled, (state,action) => {
      state.loading = false;
      state.messageData = action.payload.data;
     // console.log("action of room",state.messageData)
      
    
    })
    .addCase(fetchMessageUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
     
    })
 
   
},
});
export const {addNewMessages}=messageSlice.actions
export default messageSlice.reducer;