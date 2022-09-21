import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Review from "./Review";
import { fetchReviewList } from "../store/input-actions";

import classes from "./UsersReviewList.module.css";

const UsersReviewList = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  let userId;
  if (user) {
    userId = user.uid;
  }

  useEffect(() => {
    //firebase에서 GET
    dispatch(fetchReviewList(userId));
  }, [dispatch, userId]);
  const reviewList = useSelector((state) => state.input.reviewList);
  return (
    <div className={classes.list_box}>
      <ul className={classes.ul}>
        {reviewList.map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </ul>
    </div>
  );
};

export default UsersReviewList;
