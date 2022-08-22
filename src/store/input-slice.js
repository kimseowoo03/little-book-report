import { createSlice } from "@reduxjs/toolkit";
import { fetchReviewList} from "./input-actions";
const inputSlice = createSlice({
  name: 'input',
  initialState: {
    reviewList: []
  },
  reducers: {
    addToReviewList(state, action) {
      const newReviewList = action.payload;
      state.reviewList.push({
        id: Math.random().toString(36).substring(2, 8),
        title: newReviewList.titleValue,
        author: newReviewList.authorValue,
        review: newReviewList.reviewValue
      })
    }
  },
  extraReducers: {
    [fetchReviewList.fulfilled]: (state, action) => {
      state.reviewList = action.payload;
      console.log('잘 가져옴')
    }
  }
});

export const  inputAction = inputSlice.actions;
export default inputSlice.reducer;