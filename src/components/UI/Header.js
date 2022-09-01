import React from "react";
import classes from "./Header.module.css";
import { auth } from "../../firebase-config";
import { signOut } from "firebase/auth";

import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../store/user-slice";

const Header = () => {
  const dispatch = useDispatch();
  const userToggle = useSelector((state)=> state.user.userToggle);

  const logOutHandler = () => {
    signOut(auth);
    dispatch(userActions.userStatusToggle());
  };
  return (
    <div className={classes.header}>
      <h1>작은 도서관</h1>
      {userToggle && (
        <>
        <nav className={classes.nav}>
          <ul>
            <li>홈</li>
            <li>추천도서</li>
            <li>감상평</li>
          </ul>
        </nav>
        <button onClick={logOutHandler}>로그아웃</button>
         </>
      )}
    </div>
  );
};

export default Header;
