import { useRef } from "react";
import { useDispatch } from "react-redux";
import { inputAction } from "../store/input-slice";
import { auth } from "../firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";

const UserSignIn = () => {
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();

  const signInHandler = async (event) => {
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      const userLoginData = user.user;
      console.log(userLoginData);
      dispatch(inputAction.userStateToggle());
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={signInHandler}>
      <div>
        <label>Email</label>
        <input type="email" ref={emailRef} />
      </div>
      <div>
        <label>Password</label>
        <input type="password" ref={passwordRef} />
      </div>
      <button type="submit">로그인</button>
    </form>
  );
};

export default UserSignIn;
