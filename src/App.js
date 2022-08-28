import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/UI/Header";
import UsersForm from "./components/UsersForm";
import UsersReviewList from "./components/UsersReviewList";
import Notification from "./components/UI/Notification";

import { useSelector, useDispatch } from "react-redux";

import { sendReviewList, fetchReviewList } from "./store/input-actions";

let ininitial = true;
function App() {
  const dispatch = useDispatch();
  const reviewList = useSelector((state) => state.input.reviewList);
  const errorMessage = useSelector((state) => state.ui.errorMessage);

  useEffect(() => {     //firebase에서 GET
    dispatch(fetchReviewList())
  }, [dispatch]);

  useEffect(() => {     // firebase에서 PUT
    if (ininitial) { // 새로고침했을 때 값이 안 날라가게
      ininitial = false;
      return;
    }
    // dispatch(sendReviewList(reviewList))
  }, [reviewList, dispatch]);

  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        {errorMessage && (
          <Notification title={errorMessage.title} message={errorMessage.message} />
        )}
        <UsersForm />
        {reviewList && <UsersReviewList />}
      </main>
    </div>
  );
}

export default App;
