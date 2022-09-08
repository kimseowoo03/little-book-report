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
    console.log(reviewList)
    return reviewList;
  }
);

export const sendReviewList = createAsyncThunk(
  "input-slice/sendReviewList",
  async (reviewList) => {
    await addDoc(collectionRef, {
      title: reviewList.titleInputValue,
      author: reviewList.authorInputValue,
      review: reviewList.reviewInputValue,
    });
  }
);
