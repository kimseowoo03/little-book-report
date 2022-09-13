import { createSlice } from "@reduxjs/toolkit";
import { fetchReviewList, fetchMyReviewList } from "./input-actions";
const inputSlice = createSlice({
  name: "input",
  initialState: {
    reviewList: [],
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchReviewList.fulfilled, (state, action) => {
      console.log('패치완료!')
      state.reviewList = action.payload;
    });
    builder.addCase(fetchMyReviewList.fulfilled, (state, action) => {
      console.log('myreview패치완료!')
      state.reviewList = action.payload;
    });
  },
});

export const inputAction = inputSlice.actions;
export default inputSlice.reducer;
