import React from "react";
import Review from "./Review";
import classes from './UsersReviewList.module.css';

const UsersReviewList = ({reviewValue}) => {

  return(
    <div className={classes.list_box}>
      <ul className={classes.ul}>
        {reviewValue.map( review => <Review key={review.id} review={review} />)}
      </ul>
    </div>
  )
}

export default UsersReviewList;