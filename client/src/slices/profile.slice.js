import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
const getUserProfile = "getUserProfile/updateUser";
const postUserProfile= "postUserprofile/updateuser";
export const getUpdatedUserProfile = createAsyncThunk(
  getUserProfile,
  async (userId, { rejectWithValue }) => {
    try {
      const head = {
        header: {
          Athorization: `Bearer&{token}`,
        },
      };
      const res = await axios.get(
        `http://localhost:4000/api/users/${userId}`,
        head
      );
      console.log("profile", res);
      return { userId, res };
    } catch (error) {
      console.log("Profile error", error);

      return rejectWithValue(error.response.data);
    }
  }
);
export const updateUserProfile=createAsyncThunk(
  postUserProfile,
  async({ userId, userData },{rejectWithValue})=>{
    console.log("redux form data",userData);
    try{
      const response= await axios.put(
        `http://localhost:4000/api/users/${userId}`,
        userData
      )
      console.log("update user profile",response)
        return response.data;
    }
    catch(error){
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
)

export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    content: [],
    loading: false,
    error: null,
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUpdatedUserProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUpdatedUserProfile.fulfilled, (state, action) => {
        const { data } = action.payload.res;
        state.loading = false;
        state.content = data;
        console.log("after fullfield", data);
      })
      .addCase(getUpdatedUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      .addCase(updateUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUserProfile.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
        console.log(" state", state.success);
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        console.log("error", state.error);
      })
  },
});

export default profileSlice.reducer;
