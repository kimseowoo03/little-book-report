import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    userToggle: false,
    myReview: false
  },
  reducers: {
   myReviewToggle(state) {
    state.myReview = !state.myReview;
   },
   userStatusToggle(state) {
    state.userToggle = false;
   },
   CurrentLoggedInUser(state, action) {
    state.user = action.payload;
    state.userToggle = true;
   },
   logOutHandler(state) {
    state.user = null;
  }
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;