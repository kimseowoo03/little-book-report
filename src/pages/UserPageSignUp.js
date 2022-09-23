import UserSignIn from "../components/UserSignIn";
import UserSignUp from "../components/UserSignUp";

import classes from "./UserPageSignUp.module.css"

const UserPageSignUp = () => {
  return(
    <div className={classes.userLogForm}>
    <UserSignUp />
    <UserSignIn />
  </div>
  );
};

export default UserPageSignUp;