import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../store/user-slice";

import { auth } from "../../firebase-config";
import { signOut } from "firebase/auth";

import classes from "../../styles/Header.module.scss";
import Button from "./Button";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(userActions.CurrentLoggedInUser(user));
      } else {
        dispatch(userActions.CurrentLoggedInUser(null));
      }
    });
    return unsubscribe;
  }, [dispatch]);

  const logOutHandler = () => {
    signOut(auth);
    navigate("/");
  };

  return (
    <div className={classes.header}>
      <div className={classes.content}>
        <h1>작은 독후감</h1>
        <div>
          {user ? (
            <Button onClick={logOutHandler}>로그아웃</Button>
          ) : (
            <Button>
              <Link to="/signin">로그인</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
