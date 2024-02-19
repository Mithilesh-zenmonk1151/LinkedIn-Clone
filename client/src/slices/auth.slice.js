import { createSlice } from "@reduxjs/toolkit";
import { authUser } from "./authAction.slice";
import { loginUser } from "./authAction.slice";
import { logoutUser } from "./authAction.slice";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
      loading: false,
      error: null,
      success:false,
      logged: localStorage.getItem('logged') === 'true',
      token: localStorage.getItem('token'),
    },
    reducers: {
        toggleSuccess:(state,action)=>{
     state.success=false;
        }
    },
    extraReducers: (builder) => {
      builder
        .addCase(authUser.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(authUser.fulfilled, (state) => {
          state.loading = false;
          state.success=true;
          console.log(' state' , state.success)
          
        })
        .addCase(authUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        })
        .addCase(loginUser.pending, (state) => {
          state.loading = true;
          state.error = null;
          state.logged=false;
        })
        .addCase(loginUser.fulfilled, (state,action) => {
          state.loading = false;
          state.user = action.payload.user;
         state.logged=true;
         console.log('state', state.logged)
         state.token = action.payload.token;
        })
        .addCase(loginUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
          console.log('error payload' , action.payload)
          state.logged = false;
        })
        .addCase(logoutUser.pending, (state) => {
          state.loading = true;
          state.error = null;
          state.logged = true;
        })
        .addCase(logoutUser.fulfilled, (state) => {
          state.loading = false;
          state.user = null;
          state.logged = false;
          state.token =null;
        })
        .addCase(logoutUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
          console.log('error logout' , state.error)
          state.logged = true;
        });
    },
  });
  export const {toggleSuccess}=authSlice.actions
  export default authSlice.reducer;



