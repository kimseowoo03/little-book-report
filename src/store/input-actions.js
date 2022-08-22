import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchReviewList = createAsyncThunk(
  'input-slice/fetchReviewList',
  async () => {
  const response = await fetch(
    "https://react-http-miniproject-default-rtdb.firebaseio.com/reviewList.json"
  );
  const reviewListData = await response.json();
  if (!reviewListData) {
    return;
  }
  return reviewListData;
});

export const sendReviewList = createAsyncThunk(
  "input-slice/sendReviewList",
      async(reviewList) => {
     const resp = await fetch(
      "https://react-http-miniproject-default-rtdb.firebaseio.com/reviewList.json",
      {
        method: "PUT",
        body: JSON.stringify(reviewList),
      }
    )
    return resp
  }
);
