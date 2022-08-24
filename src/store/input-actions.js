import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchReviewList = createAsyncThunk(
  'input-slice/fetchReviewList',
  async () => {
  const response = await fetch(
    "https://react-http-miniproject-default-rtdb.firebaseio.com/reviewList.json"
  );
  const reviewListData = await response.json()
  const reviewData = await reviewListData ? reviewListData : []
  return reviewData ;
  /////문제 [] 를 patload로 보냈는데 직렬화가 할 수 없는 상태가 pending 상태가 되어버림..
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
