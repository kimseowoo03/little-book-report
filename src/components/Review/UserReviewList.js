import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import ReviewItem from "./ReviewItem";
import { fetchReviewList } from "../../store/review-actions";

import classes from "../../styles/UserReviewList.module.scss"

const UsersReviewList = () => {
  const dispatch = useDispatch();
  const { reviewList, loading } = useSelector((state) => state.review);

  useEffect(() => {
    //firebase에서 GET
    dispatch(fetchReviewList());
  }, [dispatch]);

  return (
    <div className={classes.content}>
      <ul className={classes.ul}>
        {!loading && reviewList.map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
      </ul>
    </div>
  );
};

export default UsersReviewList;
