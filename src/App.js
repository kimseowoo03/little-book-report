import React, { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import classes from "./App.module.css";

import Header from "./components/UI/Header";
import UsersForm from "./components/UsersForm";
import UsersReviewList from "./components/UsersReviewList";
import Notification from "./components/UI/Notification";
import UserSignUp from "./components/UserSignUp";
import UserSignIn from "./components/UserSignIn";

import { useSelector, useDispatch } from "react-redux";

import { fetchReviewList } from "./store/input-actions";
import { userActions } from "./store/user-slice";

function App() {
  const dispatch = useDispatch();
  const reviewList = useSelector((state) => state.input.reviewList);
  const errorMessage = useSelector((state) => state.ui.errorMessage);
  const userToggle = useSelector((state)=> state.user.userToggle);

  useEffect(() => {
    //firebase에서 GET
    dispatch(fetchReviewList());
  }, [dispatch]);

  const auth = getAuth();
  //firebase에서 권장하는 방법
    // 현재 로그인 사용자 관찰자
  onAuthStateChanged(auth, (user) => {
    if (user) {
      //로그인
      const currentUser = {
        name: user.displayName,
        uid: user.uid
      }
      console.log(`로그인 => ${currentUser}`)
      dispatch(userActions.CurrentLoggedInUser(currentUser))
    } else {
      //로그아웃
      console.log("로그아웃 되셨습니다.")
    }
  });

  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <div className={classes.userLogForm}>
          {!userToggle && <UserSignUp />}
          {!userToggle && <UserSignIn />}
        </div>
        <div className={classes.userReviewForm}>
          {errorMessage && userToggle && (
            <Notification
              title={errorMessage.title}
              message={errorMessage.message}
            />
          )}
          <UsersForm />
          {reviewList && <UsersReviewList />}
        </div>
      </main>
    </div>
  );
}

export default App;
