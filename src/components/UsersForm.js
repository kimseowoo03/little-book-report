import React from "react";
import classes from "../components/UsersForm.module.css";
import useFetch from "../hooks/useFetch";
import useInput from "../hooks/useInput";

const UsersForm = ({ onAdd }) => {

  const {
    inputValue: titleInputValue,
    inputValueIsvalid: titleInputValueIsvalid,
    inputFormIsvalid: titleFormIsvalid,
    onChangeHandler: titleOnChangeHandler,
    onBlurHandler: titleOnBlurHandler,
    resetData: titleResetData
  } = useInput(value => value.trim() === '');

  const {
    inputValue: authorInputValue,
    inputValueIsvalid: authorInputValueIsvalid,
    inputFormIsvalid: authorFormIsvalid,
    onChangeHandler: authorOnChangeHandler,
    onBlurHandler: authorOnBlurHandler,
    resetData: authorResetData
  } = useInput(value => value.trim() === '');

  const {
    inputValue: reviewInputValue,
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

  const { sendRequest } = useFetch();

  const responseData = (data) => {
    const responseDataList = {
      id: data.name,
      title: titleInputValue,
      author: authorInputValue,
      review: reviewInputValue,
    };
    onAdd(responseDataList);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    sendRequest(
      {
        url: "https://react-http-miniproject-default-rtdb.firebaseio.com/userReviewList.json",
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=utf-8",
        },
        body: {
          title: titleInputValue,
          author: authorInputValue,
          review: reviewInputValue,
        },
      },
      responseData
    );
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
            value={titleInputValue}
            onChange={titleOnChangeHandler}
            onBlur={titleOnBlurHandler}
          />
          <input
            name="author"
            placeholder="저자"
            value={authorInputValue}
            onChange={authorOnChangeHandler}
            onBlur={authorOnBlurHandler}
          />
          <textarea
            name="review"
            placeholder="감상평을 입력해주세요."
            value={reviewInputValue}
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
