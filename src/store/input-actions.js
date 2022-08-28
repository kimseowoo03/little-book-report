import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection } from "firebase/firestore";
import { db } from "../firebase-config";

const collectionRef = collection(db, "product");
export const fetchReviewList = createAsyncThunk(
  'input-slice/fetchReviewList',
  async () => {
  // const response = await fetch(
  //   "https://react-http-miniproject-default-rtdb.firebaseio.com/reviewList.json"
  // );
  // const reviewListData = await response.json()
  // const reviewData = await reviewListData || []
  // return reviewData ;
});

export const sendReviewList = createAsyncThunk(
  "input-slice/sendReviewList",
      async(reviewList) => {
         await fetch(
      "https://react-http-miniproject-default-rtdb.firebaseio.com/reviewList.json",
      {
        method: "PUT",
        body: JSON.stringify(reviewList),
      }
    )
  }
);
