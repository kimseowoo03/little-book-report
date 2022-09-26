import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Review from "./Review";
import { fetchReviewList } from "../../store/input-actions";

import classes from "./UserReviewList.module.css";

const UsersReviewList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    //firebase에서 GET
    dispatch(fetchReviewList());
  }, [dispatch]);
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
