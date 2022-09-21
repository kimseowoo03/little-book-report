import { createSlice } from "@reduxjs/toolkit";

import { fetchReviewList, fetchMyReviewList } from "./input-actions";

const inputSlice = createSlice({
  name: "input",
  initialState: {
    reviewList: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchReviewList.fulfilled, (state, action) => {
      console.log("[input-slice/fetchReviewList] Fetch complete");
      state.reviewList = action.payload;
    });
    builder.addCase(fetchMyReviewList.fulfilled, (state, action) => {
      console.log("[input-slice/fetchMyReviewList] Fetch complete");
      state.reviewList = action.payload;
    });
  },
});

export const inputAction = inputSlice.actions;
export default inputSlice.reducer;
