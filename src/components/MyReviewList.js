import { useState, useEffect } from "react";
import Review from "./Review";
import { useDispatch, useSelector } from "react-redux";
import { fetchMyReviewList } from "../store/input-actions";

const MyReviewList = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const reviewList = useSelector((state) => state.input.reviewList);

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
    <>
      {reviewList.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </>
  );
};

export default MyReviewList;
