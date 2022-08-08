import React from "react";
import classes from '../components/UsersForm.module.css'

const UsersForm = () => {
  return (
    <React.Fragment>
      <form>
        <div className={classes.from}>
          <input name="title" placeholder="제목" />
          <input name="author" placeholder="저자" />
          <input name="review" placeholder="감상평을 남겨주세요." />
        </div>
        <button type="submit" >등록</button>
      </form>
    </React.Fragment>
  );
};

export default UsersForm;
