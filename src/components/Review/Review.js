import React from "react";

import classes from './Review.module.css';

const Review = ({ review }) => {
  return(
    <li className={classes.li}>
      <span>{review.title}</span>
      <span>{review.author}</span>
      <p>{review.review}</p>
    </li>
  )
};

export default Review;