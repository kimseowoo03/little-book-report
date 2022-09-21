import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

// import Notification from "../components/UI/Notification";
import UsersReviewList from "../components/UsersReviewList";
import { userActions } from "../store/user-slice";

import classes from "./ReviewHome.module.css";

const ReviewHome = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const myReview = useSelector((state) => state.user.myReview);
  const user = useSelector((state) => state.user.user);
  // const errorMessage = useSelector((state) => state.ui.errorMessage);
  const reviewWriteHandler = () => {
    if (!user) {
      navigate("/signup");
      alert("로그인해주세요 !");
      return;
    }
    navigate("/write");
  };
  const reviewHandler = () => {
    dispatch(userActions.myReviewToggle());
    navigate("/review", { replace: true });
  };

  const myReviewHandler = () => {
    if (!user) {
      navigate("/signup");
      alert("로그인해주세요 !");
      return;
    }
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
        <button to="/write" onClick={reviewWriteHandler}>
          write
        </button>
      </div>
      {myReview ? <Outlet /> : <UsersReviewList />}
    </div>
  );
};

export default ReviewHome;
