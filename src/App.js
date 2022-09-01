import React, { useEffect } from "react";
import classes from "./App.module.css";

import Header from "./components/UI/Header";
import UsersForm from "./components/UsersForm";
import UsersReviewList from "./components/UsersReviewList";
import Notification from "./components/UI/Notification";
import UserSignUp from "./components/UserSignUp";
import UserSignIn from "./components/UserSignIn";

import { useSelector, useDispatch } from "react-redux";

import { fetchReviewList } from "./store/input-actions";

function App() {
  const dispatch = useDispatch();
  const reviewList = useSelector((state) => state.input.reviewList);
  const errorMessage = useSelector((state) => state.ui.errorMessage);
  const userLoginStatus = useSelector((state) => state.input.userLoginStatus);

  useEffect(() => {
    //firebase에서 GET
    dispatch(fetchReviewList());
  }, [dispatch]);

  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <div className={classes.userLogForm}>
          {!userLoginStatus && <UserSignUp />}
          {!userLoginStatus && <UserSignIn />}
        </div>
        <div className={classes.userReviewForm}>
          {errorMessage && userLoginStatus && (
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
