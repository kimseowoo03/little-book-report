import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import classes from "../components/UsersForm.module.css";

// import useFetch from "../hooks/useFetch";
import useInput from "../hooks/useInput";
import { sendReviewList } from "../store/input-actions";

const UsersForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);

  const titleValue = useInput((val) => val.trim() === "");
  const titleInputValue = titleValue.inputValue;

  const authorValue = useInput((val) => val.trim() === "");
  const authorInputValue = authorValue.inputValue;

  const reviewValue = useInput((val) => val.trim() === "");
  const reviewInputValue = reviewValue.inputValue;

  let formValueIsvalid = false;
  if (
    titleValue.inputValueIsvalid &&
    authorValue.inputValueIsvalid &&
    reviewValue.inputValueIsvalid
  ) {
    formValueIsvalid = true;
  } else {
    formValueIsvalid = false;
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    let userId
    if(user){
      userId = user.uid
    }
    dispatch(
      sendReviewList({ titleInputValue, authorInputValue, reviewInputValue, userId})
    );
    titleValue.resetData();
    authorValue.resetData();
    reviewValue.resetData();
    navigate("/Review")
  };

  return (
    <div className={classes.users_form}>
      <form className={classes.form} onSubmit={onSubmitHandler}>
        <p>Write</p>
        <div className={classes.form_input}>
          <input
            name="title"
            placeholder="제목"
            value={titleInputValue}
            onChange={titleValue.onChangeHandler}
            onBlur={titleValue.onBlurHandler}
          />
          <input
            name="author"
            placeholder="저자"
            value={authorInputValue}
            onChange={authorValue.onChangeHandler}
            onBlur={authorValue.onBlurHandler}
          />
          <textarea
            name="review"
            placeholder="감상평을 입력해주세요."
            value={reviewInputValue}
            onChange={reviewValue.onChangeHandler}
            onBlur={reviewValue.onBlurHandler}
          />
        </div>
        {titleValue.inputFormIsvalid ? <p>제목을 입력해주세요</p> : ""}
        {authorValue.inputFormIsvalid ? <p>저자를 입력해주세요</p> : ""}
        {reviewValue.inputFormIsvalid ? <p>감상평을 입력해주세요</p> : ""}
        <button disabled={formValueIsvalid} type="submit">
          등록
        </button>
      </form>
    </div>
  );
};

export default UsersForm;
