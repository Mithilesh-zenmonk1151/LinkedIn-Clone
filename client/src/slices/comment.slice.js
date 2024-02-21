import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
const commentPostAction='comment/commentUser' 
export const commentUser = createAsyncThunk(
    commentPostAction,
    async (data, { rejectWithValue, getState }) => {
       const body =data.commentbody
        try {
            const token = getState().auth.token;
          
            const head = {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            };
           
            const response = await axios.post(`http://localhost:4000/api/comments/${data.postId}/comments`,body , head);
            
            return response.data;
        }
        catch (error) {
           
            return rejectWithValue(error.response.data);

        }
    }
);



export const commentSlice = createSlice({
    name: 'comment',
    initialState: {
      loading: false,
      error: null,
      success:false,
    
    },
    reducers: {
     
    },
    extraReducers: (builder) => {
      builder
        .addCase(commentUser.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(commentUser.fulfilled, (state) => {
          state.loading = false;
          state.success=true;
          console.log(' state' , state.success)
          
        })
        .addCase(commentUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
          console.log("errorrrr" , state.error)
        })
       
       
    },
  });

  export default commentSlice.reducer;
