import { createSlice } from "@reduxjs/toolkit";

const inputSlice = createSlice({
  name: 'input',
  initialState: {
    reviewList: []
  },
  reducers: {
    replaceReviewList(state, action) {
      state.reviewList = action.payload;
    },
    addToReviewList(state, action) {
      const newReviewList = action.payload;
      state.reviewList.push({
        id: Math.random().toString(36).substring(2, 8),
        title: newReviewList.titleValue,
        author: newReviewList.authorValue,
        review: newReviewList.reviewValue
      })
    }
  }
});

export const  inputAction = inputSlice.actions;
export default inputSlice.reducer;