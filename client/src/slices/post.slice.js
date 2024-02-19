import { createSlice } from "@reduxjs/toolkit";

import {getPost} from "./postAction.slice";

export const postSlice= createSlice({
    name:"post",
    initialState:{
        posts:[],
        isLoading:false,
        error:null,
        success:false,

    },
    extraReducers:(builder)=>{
        builder.addCase(getPost.pending,(state)=>{
            state.isLoading=true
        })
        builder.addCase(getPost.fulfilled,(state,action)=>{
            state.isLoading=false
            state.contents= action.payload
        })
        builder.addCase(getPost.rejected,(state,action)=>{
            state.isLoading=action.error.message
        })
    }
})
export default postSlice.reducer