import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";

const collectionRef = collection(db, "product");
export const fetchReviewList = createAsyncThunk(
  "input-slice/fetchReviewList",
  async () => {
    const data = await getDocs(collectionRef);
    //자동 부여되는 id를 사용하자.
    const reviewList = data.docs.map((doc) => ({id: doc.id, ...doc.data() }));
    return reviewList;
  }
);

export const sendReviewList = createAsyncThunk(
  "input-slice/sendReviewList",
  async (reviewValue) => {
    await addDoc(collectionRef, {
      title: reviewValue.titleInputValue,
      author: reviewValue.authorInputValue,
      review: reviewValue.reviewInputValue,
      uid: reviewValue.userId
    });
  }
);
