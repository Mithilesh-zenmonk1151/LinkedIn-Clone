import {createSlice} from "@reduxjs/toolkit"
const initialState= {
    signupData:null,
    isLoading:false,
    token:localStorage.getItem("token")? JSON.parse(localStorage.getItem("token")): null,

};
const authSlice= createSlice({
    name:"auth",
    initialState:initialState,
    reducers: {
        setSignUpData(state,value){
            state.signupData=value.payload;
        },
        setIsLoading(state,value){
            state.isLoading= value.payload;

        },
        setToken(state,value){
            state.token=value.payload;
        },
    },
})

export const {setSignUpData,setIsLoading,setToken}= authSlice.actions;
export default authSlice.reducer;