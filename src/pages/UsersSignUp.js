import UserSignIn from "../components/UserSignIn";
import UserSignUp from "../components/UserSignUp";

import classes from "./UsersSignUp.module.css"

const UsersSignUp = () => {
  return(
    <div className={classes.userLogForm}>
    <UserSignUp />
    <UserSignIn />
  </div>
  );
};

export default UsersSignUp;