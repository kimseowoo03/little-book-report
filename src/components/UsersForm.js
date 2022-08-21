import React from "react";
import { useDispatch, useSelector } from "react-redux";

import classes from "../components/UsersForm.module.css";

// import useFetch from "../hooks/useFetch";
import useInput from "../hooks/useInput";
import { inputAction } from "../store/input-slice";

const UsersForm = ( ) => {
  const dispatch = useDispatch();
  const reviewList = useSelector(state => state.input.reviewList)

  const {
    inputValue: titleValue,
    inputValueIsvalid: titleInputValueIsvalid,
    inputFormIsvalid: titleFormIsvalid,
    onChangeHandler: titleOnChangeHandler,
    onBlurHandler: titleOnBlurHandler,
    resetData: titleResetData
  } = useInput(value => value.trim() === '');

  const {
    inputValue: authorValue,
    inputValueIsvalid: authorInputValueIsvalid,
    inputFormIsvalid: authorFormIsvalid,
    onChangeHandler: authorOnChangeHandler,
    onBlurHandler: authorOnBlurHandler,
    resetData: authorResetData
  } = useInput(value => value.trim() === '');

  const {
    inputValue: reviewValue,
    inputValueIsvalid: reviewInputValueIsvalid,
    inputFormIsvalid: reviewFormIsvalid,
    onChangeHandler: reviewOnChangeHandler,
    onBlurHandler: reviewOnBlurHandler,
    resetData: reviewResetData
  } = useInput(value => value.trim() === '')

  let formValueIsvalid = false;
  if(titleInputValueIsvalid && authorInputValueIsvalid && reviewInputValueIsvalid) {
    formValueIsvalid = true;
  }else{
    formValueIsvalid= false;
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
     dispatch(inputAction.addToReviewList({
      titleValue, authorValue, reviewValue
    }));
    console.log(reviewList)
    titleResetData();
    authorResetData();
    reviewResetData();
  };

  return (
    <React.Fragment>
      <form className={classes.form} onSubmit={onSubmitHandler}>
        <p>감상평</p>
        <div className={classes.form_input}>
          <input
            name="title"
            placeholder="제목"
            value={titleValue}
            onChange={titleOnChangeHandler}
            onBlur={titleOnBlurHandler}
          />
          <input
            name="author"
            placeholder="저자"
            value={authorValue}
            onChange={authorOnChangeHandler}
            onBlur={authorOnBlurHandler}
          />
          <textarea
            name="review"
            placeholder="감상평을 입력해주세요."
            value={reviewValue}
            onChange={reviewOnChangeHandler}
            onBlur={reviewOnBlurHandler}
          />
        </div>
        {titleFormIsvalid ? <p>제목을 입력해주세요</p> : ''}
        {authorFormIsvalid ? <p>저자를 입력해주세요</p> : ''}
        {reviewFormIsvalid ? <p>감상평을 입력해주세요</p> : ''}
        <button disabled={formValueIsvalid} type="submit">등록</button>
      </form>
    </React.Fragment>
  );
};

export default UsersForm;
