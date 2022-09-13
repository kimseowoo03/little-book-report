import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import UsersSignUp from "./pages/UsersSignUp";
import ReviewHome from "./pages/ReviewHome";
import Header from "./components/UI/Header";

import { getAuth, onAuthStateChanged } from "firebase/auth";

import UsersForm from "./components/UsersForm";

import { useSelector, useDispatch } from "react-redux";
import { userActions } from "./store/user-slice";
import MyReviewList from "./components/MyReviewList";

function App() {
  const userToggle = useSelector((state) => state.user.userToggle);
  const dispatch = useDispatch();

  const auth = getAuth();
  //firebase에서 권장하는 방법
  // 현재 로그인 사용자 관찰자
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        //사용자가 인증 || 로그인
        const currentUser = {
          name: user.displayName,
          uid: user.uid,
        };
        console.log("현재상태: 로그인" + user.uid);
        dispatch(userActions.CurrentLoggedInUser(currentUser));
      } else {
        //로그아웃
        console.log("현재상태: 로그아웃");
      }
    });
  }, [auth, dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="Home" element={<Home />} />
        {!userToggle && <Route path="SignUp" element={<UsersSignUp />} />}
        <Route path="Review" element={<ReviewHome />} >
          <Route path="myreview" element={<MyReviewList />} />
        </Route>
        <Route path="Write" element={<UsersForm />} />
      </Route>
    </Routes>
  );
}

export default App;
