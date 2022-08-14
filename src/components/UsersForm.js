import React, { useState } from "react";
import classes from '../components/UsersForm.module.css'
import useFetch from "../hooks/useFetch";

const UsersForm = ({ onAdd }) => {

  const [titleValue, setTitleValue] = useState('');
  const [authorValue, setAuthorValue] = useState('');
  const [reviewValue, setReviewValue] = useState('');

  const {sendRequest} = useFetch();

  const responseData = (data) => {
    const responseDataList = {
      id: data.name,
      title: titleValue,
      author: authorValue,
      review: reviewValue
    }
    onAdd(responseDataList);
  }

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
          title: titleValue,
          author: authorValue,
          review: reviewValue,
        },
      },
      responseData
    );
    setTitleValue("");
    setAuthorValue("");
    setReviewValue("");
  };


  return (
    <React.Fragment>
      <form className={classes.form} onSubmit={onSubmitHandler} >
      <p>감상평</p>
        <div className={classes.form_input}>
          <input name="title" placeholder="제목" value={titleValue} onChange={(e) => setTitleValue(e.target.value)} />
          <input name="author" placeholder="저자" value={authorValue} onChange={(e) => setAuthorValue(e.target.value)} />
          <textarea name="review" placeholder="감상평을 입력해주세요." value={reviewValue} onChange={(e) => setReviewValue(e.target.value)} />
        </div>
        <button type="submit" >등록</button>
      </form>
    </React.Fragment>
  );
};

export default UsersForm;
