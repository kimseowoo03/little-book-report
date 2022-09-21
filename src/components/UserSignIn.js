import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

import { auth } from "../firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";

import Button from "./UI/Button";
import classes from "./UserSignIn.module.css";



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
    <form onSubmit={signInHandler} className={classes.form}>
      <div>
        <label>Email</label>
        <input type="email" ref={emailRef} />
      </div>
      <div>
        <label>Password</label>
        <input type="password" ref={passwordRef} />
      </div>
      <Button type="submit">로그인</Button>
    </form>
  );
};

export default React.memo(UserSignIn);
