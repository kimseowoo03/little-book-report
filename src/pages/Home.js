import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

import Header from "../components/UI/Header";
import { useSelector } from "react-redux";


const Home = () => {
  const userToggle = useSelector((state) => state.user.userToggle);

  return (
    <Fragment>
      <Header />
      {!userToggle && <Link to="SignUp" >로그인/회원가입</Link>}
      <Outlet />
    </Fragment>
  );
};

export default Home;
