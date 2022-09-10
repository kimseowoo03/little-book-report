import React, {useEffect} from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import UsersSignUp from "./pages/UsersSignUp";
import ReviewHome from "./pages/ReviewHome";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { useNavigate } from "react-router-dom";

// import UsersForm from "./components/UsersForm";
// import UsersReviewList from "./components/UsersReviewList";
// import Notification from "./components/UI/Notification";

import { useSelector, useDispatch } from "react-redux";

// import { fetchReviewList } from "./store/input-actions";
import { userActions } from "./store/user-slice";

function App() {
  const userToggle = useSelector((state) => state.user.userToggle);
  console.log(userToggle);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // useEffect(() => {
  //   //firebase에서 GET
  //   dispatch(fetchReviewList());
  // }, [dispatch]);

  const auth = getAuth();
  //firebase에서 권장하는 방법
    // 현재 로그인 사용자 관찰자
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          //사용자가 인증 || 로그인
          const currentUser = {
            name: user.displayName,
            uid: user.uid
          }
          console.log("현재상태: 로그인" + user.uid)
          dispatch(userActions.CurrentLoggedInUser(currentUser));
          navigate("/Home");
        } else {
          //로그아웃
          console.log("현재상태: 로그아웃")
        }
      });
    }, [auth, dispatch])

  return (
    <Routes>
      <Route path="/Home" element={<Home />}>
        {userToggle ? (
          <Route path="" element={<ReviewHome />} />
        ) : (
          <Route path="SignUp" element={<UsersSignUp />} />
        )}
      </Route>
    </Routes>
  );
}

export default App;
