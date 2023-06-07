import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import useUserForm from "../../hooks/useUserForm";
import { sendReviewList } from "../../store/review-actions";

import style from "../../styles/UserForm.module.scss";
import Button from "../UI/Button";

const ReportWrite = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);

  const titleValue = useUserForm((val) => val.trim() !== "");
  const titleInputValue = titleValue.inputValue;

  const authorValue = useUserForm((val) => val.trim() !== "");
  const authorInputValue = authorValue.inputValue;

  const reviewValue = useUserForm((val) => val.trim() !== "");
  const reviewInputValue = reviewValue.inputValue;

  const formValueIsvalid =
    titleValue.inputValueIsvalid &&
    authorValue.inputValueIsvalid &&
    reviewValue.inputValueIsvalid;

    console.log(titleValue.inputValueIsvalid)

  const onSubmitHandler = (event) => {
    event.preventDefault();
    let userId;
    if (user) {
      userId = user.uid;
    }
    dispatch(
      sendReviewList({
        titleInputValue,
        authorInputValue,
        reviewInputValue,
        userId,
      })
    );
    titleValue.resetData();
    authorValue.resetData();
    reviewValue.resetData();
    navigate("/");
  };

  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={onSubmitHandler}>
        <h2>독후감 작성</h2>
        <div className={style["input-box"]}>
          <label>제목</label>
          <input
            name="title"
            placeholder="제목"
            value={titleInputValue}
            onChange={titleValue.onChangeHandler}
            onBlur={titleValue.onBlurHandler}
          />
          {titleValue.inputFormIsvalid && <p className={style.alert}>제목을 입력해주세요</p>}
        </div>
        <div className={style["input-box"]}>
        <label>저자</label>
          <input
            name="author"
            placeholder="저자"
            value={authorInputValue}
            onChange={authorValue.onChangeHandler}
            onBlur={authorValue.onBlurHandler}
          />
          {authorValue.inputFormIsvalid && <p className={style.alert}>저자를 입력해주세요</p>}
        </div>
        <div className={style["input-box"]}>
        <label>감상평</label>
          <textarea
            name="review"
            placeholder="감상평을 입력해주세요."
            value={reviewInputValue}
            onChange={reviewValue.onChangeHandler}
            onBlur={reviewValue.onBlurHandler}
          />
          {reviewValue.inputFormIsvalid && <p className={style.alert}>감상평을 입력해주세요</p>}
        </div>
        <Button disabled={!formValueIsvalid} type="submit">
          등록
        </Button>
      </form>
    </div>
  );
};

export default ReportWrite;
