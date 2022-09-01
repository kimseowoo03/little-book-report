import React from "react";
import Review from "./Review";
import classes from "./UsersReviewList.module.css";
import { useSelector } from "react-redux";

const UsersReviewList = () => {
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
