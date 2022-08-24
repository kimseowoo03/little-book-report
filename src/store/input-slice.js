import { createSlice } from "@reduxjs/toolkit";
import { fetchReviewList} from "./input-actions";
const inputSlice = createSlice({
  name: "input",
  initialState: {
    reviewList: []
  },
  reducers: {
    addToReviewList(state, action) {
      const { titleValue, authorValue, reviewValue } = action.payload;
      state.reviewList.push({
        id: Math.random().toString(36).substring(2, 8),
        title: titleValue,
        author: authorValue,
        review: reviewValue,
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchReviewList.fulfilled, (state, action) => {
      console.log(action.payload)
      state.reviewList = action.payload;
    });
  }
});

export const  inputAction = inputSlice.actions;
export default inputSlice.reducer;