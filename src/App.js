import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

import { getAuth, onAuthStateChanged } from "firebase/auth";

import ReviewHome from "./pages/ReviewHome";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

import Header from "./components/UI/Header";
import ReportWrite from "./components/Review/ReportWrite";

import { userActions } from "./store/user-slice";


function App() {
  const dispatch = useDispatch();

  const auth = getAuth();

  // 현재 로그인 사용자 관찰자
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        //사용자가 인증 || 로그인
        const currentUser = {
          name: user.displayName,
          uid: user.uid,
        };
        console.log("[App/onAuthStateChanged] Login" + user.uid);
        dispatch(userActions.CurrentLoggedInUser(currentUser));
      } else {
        console.log("[App/onAuthStateChanged] Log out");
      }
    });
  }, [auth, dispatch]);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<ReviewHome />} />
        <Route path="signin" element={<SignInPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="write" element={<ReportWrite />} />
      </Routes>
    </div>
  );
}

export default App;
