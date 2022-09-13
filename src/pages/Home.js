import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const Home = () => {
  const userToggle = useSelector((state) => state.user.userToggle);

  return (
    <Fragment>
      {!userToggle && <Link to="/SignUp" >로그인/회원가입</Link>}
      <p>Home입니다.</p>
    </Fragment>
  );
};

export default Home;
