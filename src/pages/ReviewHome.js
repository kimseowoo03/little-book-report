import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// import Notification from "../components/UI/Notification";
import UserReviewList from "../components/Review/UserReviewList";
import MyReviewList from "../components/Review/MyReviewList";
import { userActions } from "../store/user-slice";

import classes from "../styles/ReviewHome.module.scss";
import Loading from "../components/UI/Loading";

const ReviewHome = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.review);
  const myReview = useSelector((state) => state.user.myReview);
  const user = useSelector((state) => state.user.user);

  const reviewWriteHandler = () => {
    if (!user) {
      navigate("/signin");
      alert("로그인해주세요 !");
      return;
    }
    navigate("/write");
  };

  const AllReviewHandler = () => {
    dispatch(userActions.myReviewToggle(false));
  };

  const myReviewHandler = () => {
    if (!user) {
      navigate("/signup");
      alert("로그인해주세요 !");
      return;
    }
    dispatch(userActions.myReviewToggle(true));
  };

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        {user&&<p>{user.name}님 반가워요!</p>}
        <div className={classes["button-box"]}>
          <div className={classes["select-review-box"]}>
            <button
              className={!myReview ? classes["selected-review"]: null }
              onClick={AllReviewHandler}
            >
              전체
            </button>
            <button
              className={myReview ? classes["selected-review"]: null}
              onClick={myReviewHandler}
            >
              나의 독후감
            </button>
          </div>
          <button onClick={reviewWriteHandler}>작성하기</button>
        </div>
      </div>
      <div className={loading?classes.loading: null}>
      {loading&& <Loading />}
      </div>
      {myReview?<MyReviewList />:<UserReviewList />}
    </div>
  );
};

export default ReviewHome;
