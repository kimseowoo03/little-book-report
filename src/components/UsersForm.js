import React from "react";
import classes from '../components/UsersForm.module.css'

const UsersForm = () => {
  return (
    <React.Fragment>
      <form className={classes.form}>
      <p>감상평</p>
        <div className={classes.form_input}>
          <input name="title" placeholder="제목" />
          <input name="author" placeholder="저자" />
          <textarea name="review" placeholder="감상평을 입력해주세요."  />
        </div>
        <button type="submit" >등록</button>
      </form>
    </React.Fragment>
  );
};

export default UsersForm;
