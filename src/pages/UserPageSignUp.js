import UserSignIn from "../components/accounts/UserSignIn";
import UserSignUp from "../components/accounts/UserSignUp";

import classes from "./UserPageSignUp.module.css";

const UserPageSignUp = () => {
  return(
    <div className={classes.userLogForm}>
    <UserSignUp />
    <UserSignIn />
  </div>
  );
};

export default UserPageSignUp;