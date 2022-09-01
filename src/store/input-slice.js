import { createSlice } from "@reduxjs/toolkit";
import { fetchReviewList } from "./input-actions";
const inputSlice = createSlice({
  name: "input",
  initialState: {
    reviewList: [],
  },
  reducers: {
    addToReviewList(state, action) {
      const { titleInputValue, authorInputValue, reviewInputValue } = action.payload;
      state.reviewList.push({
        id: Math.random().toString(36).substring(2, 8),
        title: titleInputValue,
        author: authorInputValue,
        review: reviewInputValue,
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchReviewList.fulfilled, (state, action) => {
      state.reviewList = action.payload;
    });
  },
});

export const inputAction = inputSlice.actions;
export default inputSlice.reducer;
