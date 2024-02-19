import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: null,
  isLoading: false,
};
const userSlice = createSlice({
  name: "profile",
  initialState: initialState,
  reducers: {
    setUser(state, value) {
      state.user = value.payload;
    },
    setIsLoading(state, value) {
      state.isLoading = value.payload;
    },
  },
});
export const { setUser, setIsLoading } = userSlice.actions;
export default userSlice.reducers;
