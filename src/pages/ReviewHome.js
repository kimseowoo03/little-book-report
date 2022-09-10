import { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import classes from "./ReviewHome.module.css";

// import Notification from "../components/UI/Notification";
import UsersReviewList from "../components/UsersReviewList";
import { useSelector, useDispatch } from "react-redux";
import {fetchReviewList} from "../store/input-actions";

const ReviewHome = () => {
  const dispatch = useDispatch();
  const reviewList = useSelector((state) => state.input.reviewList);
  const errorMessage = useSelector((state) => state.ui.errorMessage);

    useEffect(() => {
    //firebase에서 GET
    dispatch(fetchReviewList());
  }, [dispatch]);

  return (
    <div className={classes.userReviewForm}>
      {/* {errorMessage && (
        <Notification
          title={errorMessage.title}
          message={errorMessage.message}
        />
      )} */}
      <Outlet />
      <div className={classes.reviewBtn}>
        <button>my review</button>
        <button><Link to="Write">write</Link></button>
      </div>
      {reviewList && <UsersReviewList />}
    </div>
  );
};

export default ReviewHome;
