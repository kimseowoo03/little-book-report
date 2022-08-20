import { createSlice } from "@reduxjs/toolkit";

const inputSlice = createSlice({
  name: 'input',
  initialState: {
    reviewList: []
  },
  reducers: {
    addToReviewList(state, action) {
      console.log(action.payload)
    }
  }
});

export const  inputAction = inputSlice.actions;
export default inputSlice.reducer;