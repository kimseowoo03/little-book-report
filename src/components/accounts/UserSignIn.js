import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import { auth } from "../../firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";

import Button from "../UI/Button";
import style from "../../styles/UserSign.module.scss";

const UserSignIn = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const signInHandler = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    try {
      //사용자 로그인 처리
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className={style.container}>
      <h2>로그인</h2>
      <form onSubmit={signInHandler} className={style.form}>
        <div className={style["input-box"]}>
          <label>이메일</label>
          <input type="email" ref={emailRef} />
        </div>
        <div className={style["input-box"]}>
          <label>비밀번호</label>
          <input type="password" ref={passwordRef} autoComplete="off" />
        </div>
        <Button type="submit">로그인</Button>
      </form>
      <p>회원이 아니신가요? <Link to="/signup">회원가입</Link></p>
    </div>
  );
};

export default React.memo(UserSignIn);
