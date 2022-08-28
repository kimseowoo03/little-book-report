import React, { useEffect } from "react";
import "./App.css";
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
        {!userLoginStatus && <UserSignUp />}
        {!userLoginStatus && <UserSignIn />}
        {errorMessage && userLoginStatus && (
          <Notification
            title={errorMessage.title}
            message={errorMessage.message}
          />
        )}
        <UsersForm />
        {reviewList && <UsersReviewList />}
      </main>
    </div>
  );
}

export default App;
