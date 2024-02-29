import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const commentPostAction='comment/commentUser' 
const getCommentPostAction= 'getComment/commentUser'

export const commentUser = createAsyncThunk(
    commentPostAction,
    async (data, { rejectWithValue, getState }) => {
       const body ={comment:data.comment,
                   postId:data.postId};
       console.log(body, "body")
       
        try {
            const token = getState().auth.token;
          
            const header = {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            };
            const response = await axios.post(`http://localhost:4000/api/comments/${data.postId}`,body , header);
            return response.data;
        }
        catch (error) {
            return rejectWithValue(error.response.data);

        }
    }
);

export const getCommentUser = createAsyncThunk( getCommentPostAction, async (postId , {rejectWithValue})=>{
  // const postId=datatofetch.postId;

try{
  const res =await axios.get(`http://localhost:4000/api/comments/${postId}`);
  console.log(res ,"comment response get");
  const data =  res.data;
  const response= data.commentData;
  // let comment={};
  // for(let i=0; i<response.length; i++){
  //   comment=comment.push(response[i].comment)


  // }
 
  let comments = [];
response.forEach((comment) => {
  comments.push(comment?.comment);
}) 

 
  console.log("this is response of only get comment data",response);
  console.log("comment duwedqwed er3weq get daata",comments);


  return {postId,comments};
}
catch (error) {
         console.log("errorrmgvdsfhdryjjkyuljk",error)

  return rejectWithValue(error.response.data);

}
})




export const commentSlice = createSlice({
    name: 'comments',
    initialState: {
      content:{},
      loading: false,
      error: null,
      success:false,
    
    },
    reducers: {},
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
          console.log("error" , state.error)
        })
        .addCase(getCommentUser.pending, (state) => {
          state.loading = false;
        })
        .addCase(getCommentUser.fulfilled, (state, action) => {
          state.loading = false;
          state.content = action.payload;
        })
        .addCase(getCommentUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error;
        });
    },
  });

  export default commentSlice.reducer;
