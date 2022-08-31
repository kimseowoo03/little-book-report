import React from "react";
import { useDispatch } from "react-redux";

import classes from "../components/UsersForm.module.css";

// import useFetch from "../hooks/useFetch";
import useInput from "../hooks/useInput";
import { inputAction } from "../store/input-slice";
import { sendReviewList } from "../store/input-actions";

const UsersForm = ( ) => {
  const dispatch = useDispatch();

  // const {
  //   inputValue: titleValue,
  //   inputValueIsvalid: titleInputValueIsvalid,
  //   inputFormIsvalid: titleFormIsvalid,
  //   onChangeHandler: titleOnChangeHandler,
  //   onBlurHandler: titleOnBlurHandler,
  //   resetData: titleResetData
  // } = useInput(value => value.trim() === '');

  // const {
  //   inputValue: authorValue,
  //   inputValueIsvalid: authorInputValueIsvalid,
  //   inputFormIsvalid: authorFormIsvalid,
  //   onChangeHandler: authorOnChangeHandler,
  //   onBlurHandler: authorOnBlurHandler,
  //   resetData: authorResetData
  // } = useInput(value => value.trim() === '');

  // const {
  //   inputValue: reviewValue,
  //   inputValueIsvalid: reviewInputValueIsvalid,
  //   inputFormIsvalid: reviewFormIsvalid,
  //   onChangeHandler: reviewOnChangeHandler,
  //   onBlurHandler: reviewOnBlurHandler,
  //   resetData: reviewResetData
  // } = useInput(value => value.trim() === '')

  const titleValue = useInput((val) => val.trim() === "");
  const titleInputValue = titleValue.inputValue;

  const authorValue = useInput((val) => val.trim() === "");
  const authorInputValue = authorValue.inputValue;

  const reviewValue = useInput((val) => val.trim() === "");
  const reviewInputValue = reviewValue.inputValue;

  let formValueIsvalid = false;
  if(titleValue.inputValueIsvalid && authorValue.inputValueIsvalid && reviewValue.inputValueIsvalid) {
    formValueIsvalid = true;
  }else{
    formValueIsvalid= false;
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
     dispatch(inputAction.addToReviewList({
      titleInputValue, authorInputValue, reviewInputValue
    }));
    dispatch(sendReviewList({titleInputValue, authorInputValue, reviewInputValue}))
    titleValue.resetData();
    authorValue.resetData();
    reviewValue.resetData();
  };

  return (
    <React.Fragment>
      <form className={classes.form} onSubmit={onSubmitHandler}>
        <p>감상평</p>
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
        {titleValue.inputFormIsvalid ? <p>제목을 입력해주세요</p> : ''}
        {authorValue.inputFormIsvalid ? <p>저자를 입력해주세요</p> : ''}
        {reviewValue.inputFormIsvalid ? <p>감상평을 입력해주세요</p> : ''}
        <button disabled={formValueIsvalid} type="submit">등록</button>
      </form>
    </React.Fragment>
  );
};

export default UsersForm;
