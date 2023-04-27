import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ReviewItem from "./ReviewItem";
import { fetchMyReviewList } from "../../store/review-actions";

import classes from "../../styles/UserReviewList.module.scss"

const MyReviewList = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const { reviewList, loading } = useSelector((state) => state.review);

  const [once, setOnce] = useState(true);
  let userId;
  if (user) {
    userId = user.uid;
  }
  useEffect(() => {
    //firebase에서 GET
    // ensure that it's executed only once when data exists
    if (once && userId) {
      setOnce(false);
      dispatch(fetchMyReviewList(userId));
    }
  }, [dispatch, userId, once]);
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

export default MyReviewList;
