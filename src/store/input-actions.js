import { createAsyncThunk } from "@reduxjs/toolkit";

import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase-config";

const collectionRef = collection(db, "product");
export const fetchReviewList = createAsyncThunk(
  "input-slice/fetchReviewList",
  async () => {
    const data = await getDocs(collectionRef);
    const reviewList = data.docs.map((doc) => ({id: doc.id, ...doc.data() }));
    return reviewList;
  }
);

export const fetchMyReviewList = createAsyncThunk(
  "input-slice/fetchMyReviewList",
  async (uid) => {
    const q = query(collectionRef, where("uid", "==", `${uid}` ));
    //쿼리 실행
    const querySnapshot = await getDocs(q);
    var queryData = [] ;
    querySnapshot.forEach((doc) => {
      queryData.push({id: doc.id, ...doc.data() })
    });
    console.log("=======fetchMyReviewList=======");
    console.log(queryData);
    if(queryData.length === 0){
      // console.log("빈값임");
      // return
    }
    return queryData;
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
