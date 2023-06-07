import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import { auth } from "../../firebase-config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import Button from "../UI/Button";
import style from "../../styles/UserSign.module.scss";

const UserSignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const nameRef = useRef();
  const navigate = useNavigate();

  const submitHandler = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const name = nameRef.current.value;
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, { displayName: name });
      navigate("/");
      console.log(user.user);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
     <div className={style.container}>
      <h2>회원가입</h2>
    <form onSubmit={submitHandler} className={style.form}>
      <div className={style["input-box"]}>
        <label>이름</label>
        <input type="text" ref={nameRef} />
      </div>
      <div className={style["input-box"]}>
        <label>이메일</label>
        <input type="email" ref={emailRef} />
      </div>
      <div className={style["input-box"]}>
        <label>비밀번호</label>
        <input type="password" ref={passwordRef} autoComplete="off"/>
      </div>
      <Button type="submit">회원가입</Button>
    </form>
     <p>회원이신가요? <Link to="/signin">로그인</Link></p>
    </div>
  );
};

export default React.memo(UserSignUp);
