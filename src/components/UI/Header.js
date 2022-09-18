import React, { Fragment } from "react";
import classes from "./Header.module.css";
import { auth } from "../../firebase-config";
import { signOut } from "firebase/auth";
import { Link, useNavigate, Outlet } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../store/user-slice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userToggle = useSelector((state) => state.user.userToggle);
  const user = useSelector((state) => state.user.user);

  const logOutHandler = () => {
    signOut(auth);
    navigate("/");
    dispatch(userActions.userStatusToggle());
  };
  return (
    <Fragment>
      <div className={classes.header}>
        <h1>작은 도서관</h1>
        {userToggle && (
          <>
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
            <p>{user && user.name}님</p>
            <button onClick={logOutHandler}>로그아웃</button>
          </>
        )}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Header;
