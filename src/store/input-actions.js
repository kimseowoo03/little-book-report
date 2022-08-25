import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs, addDoc } from "firebase/firestore";

import { db } from "../firebase-config";
// const usersCollectionRef = collection(db, "reviewList");

export const fetchReviewList = createAsyncThunk(
  'input-slice/fetchReviewList',
  async () => {
    const response = await getDocs(collection(db, "users/user1/reviewList"));
    const data = response.docs.map(doc => doc.data()); // 각 데이터 불러와 배열에 저장 [{...},{...}]
  return data ;
});

export const sendReviewList = createAsyncThunk(
  "input-slice/sendReviewList",
      async(reviewList) => {
        const {titleValue: title, authorValue: author , reviewValue: review} = reviewList;
      await addDoc(collection(db, "users/user1/reviewList"),{
        id: Math.random().toString(36).substring(2, 8),
        title,
        author,
        review
      })
  }
);
