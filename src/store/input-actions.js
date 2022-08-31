import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";

const collectionRef = collection(db, "product");
export const fetchReviewList = createAsyncThunk(
  "input-slice/fetchReviewList",
  async () => {
    const data = await getDocs(collectionRef);
    const reviewList = data.docs.map((doc) => ({ ...doc.data() }));
    return reviewList;
  }
);

export const sendReviewList = createAsyncThunk(
  "input-slice/sendReviewList",
  async (reviewList) => {
    await addDoc(collectionRef, {
      id: Math.random().toString(36).substring(2, 8),
      title: reviewList.titleInputValue,
      author: reviewList.authorInputValue,
      review: reviewList.reviewInputValue,
    });
  }
);
