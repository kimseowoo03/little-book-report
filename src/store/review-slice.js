import { createSlice } from "@reduxjs/toolkit";

import { fetchReviewList, fetchMyReviewList } from "./review-actions";

const reviewSlice = createSlice({
  name: "review",
  initialState: {
    reviewList: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviewList.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchReviewList.fulfilled, (state, action) => {
        console.log("[review-slice/fetchReviewList] Fetch complete");
        state.reviewList = action.payload;
        state.loading = false;
      });
    builder
      .addCase(fetchMyReviewList.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMyReviewList.fulfilled, (state, action) => {
        console.log("[review-slice/fetchMyReviewList] Fetch complete");
        state.reviewList = action.payload;
      });
  },
});

export const reviewAction = reviewSlice.actions;
export default reviewSlice.reducer;
