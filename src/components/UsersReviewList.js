import React, { useEffect, useCallback, useState } from "react";
import Review from "./Review";
import classes from './UsersReviewList.module.css';

const UsersReviewList = () => {
  const [reviewValue, setReviewValue] = useState([]);

  const responseReviewList = useCallback( async () => {
      const response = await fetch('https://react-http-miniproject-default-rtdb.firebaseio.com/userReviewList.json');
      const data = await response.json();
      
      const reviewData = [];
  
       for(const key in data) {
         reviewData.push({
          id: key,
          title: data[key].title,
          author: data[key].author,
          review: data[key].review
        });
      }
      setReviewValue(reviewData);
    },[]);
  
  useEffect(() => {
    responseReviewList();
  },[responseReviewList])


  return(
    <div>
      <ul className={classes.ul}>
        {reviewValue.map( review => <Review key={review.id} review={review} />)}
      </ul>
    </div>
  )
}

export default UsersReviewList;