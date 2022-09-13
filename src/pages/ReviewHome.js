import { Link, Outlet, useNavigate } from "react-router-dom";
import classes from "./ReviewHome.module.css";

// import Notification from "../components/UI/Notification";
import UsersReviewList from "../components/UsersReviewList";
import { useDispatch, useSelector } from "react-redux";

import { userActions } from "../store/user-slice";

const ReviewHome = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const myReview = useSelector((state) => state.user.myReview);
  // const errorMessage = useSelector((state) => state.ui.errorMessage);
  const reviewHandler = () => {
    dispatch(userActions.myReviewToggle());
    navigate("/Review", { replace: true });
  };

  const myReviewHandler = () => {
    dispatch(userActions.myReviewToggle());
    navigate("myreview");
  };
  // useEffect(() => {
  //   //firebase에서 GET
  //   dispatch(fetchReviewList(userId));
  // }, [dispatch, userId]);

  return (
    <div className={classes.userReviewForm}>
      {/* {errorMessage && (
        <Notification
          title={errorMessage.title}
          message={errorMessage.message}
        />
      )} */}
      <div className={classes.reviewBtn}>
        {myReview ? (
          <button onClick={reviewHandler}>review</button>
        ) : (
          <button onClick={myReviewHandler}>my review</button>
        )}
        <button>
          <Link to="/Write">write</Link>
        </button>
      </div>
      {myReview ? <Outlet /> : <UsersReviewList />}
    </div>
  );
};

export default ReviewHome;
