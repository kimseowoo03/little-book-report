import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    userToggle: false
  },
  reducers: {
   userStatusToggle(state) {
    state.userToggle = false;
   },
   CurrentLoggedInUser(state, action) {
    state.user = action.payload;
    state.userToggle = true;
   }
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;