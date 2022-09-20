import React, { Fragment, useState } from "react";
import classes from "./Header.module.css";
import { auth } from "../../firebase-config";
import { signOut } from "firebase/auth";
import { Link, useNavigate, Outlet } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../store/user-slice";
import { uiActions } from "../../store/ui-slice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userToggle = useSelector((state) => state.user.userToggle);
  const user = useSelector((state) => state.user.user);
  const signToggle = useSelector((state) => state.ui.signToggle);

  const logOutHandler = () => {
    signOut(auth);
    navigate("/");
    dispatch(userActions.userStatusToggle());
    dispatch(userActions.logOutHandler());
    signHandler();
  };

  const signHandler = () => {
    dispatch(uiActions.signHandler());
  };

  return (
    <Fragment>
      <div className={classes.header}>
        <h1>작은 도서관</h1>
        <nav className={classes.nav}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="review">감상평</Link>
            </li>
          </ul>
        </nav>
        {userToggle && (
          <>
            <p>{user && user.name}님</p>
            <button onClick={logOutHandler}>로그아웃</button>
          </>
        )}
        {!userToggle && (
          <>
            {signToggle ? (
              <Link className={classes.homeLink} to="/" onClick={signHandler}>
                홈으로
              </Link>
            ) : (
              <Link
                className={classes.homeLink}
                to="/signup"
                onClick={signHandler}
              >
                {" "}
                로그인/회원가입
              </Link>
            )}
          </>
        )}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Header;
