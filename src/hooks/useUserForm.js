import { useState } from "react";

/**
새로운 훅을 만들 경우 useUserForm을 참고하여 만들어주세요.
 */
const useUserForm = (inputValueIsvalidFun) => {
  const [inputValue, setInputValue] = useState("");
  const [inputTouched, setInputTouched] = useState(false);

  const inputValueIsvalid = inputValueIsvalidFun(inputValue);
  const inputFormIsvalid = inputValueIsvalid && inputTouched;

  const onChangeHandler = (event) => {
    setInputValue(event.target.value);
  }

  const onBlurHandler = () => {
    setInputTouched(true);
  }

  const resetData = () => {
    setInputValue('');
    setInputTouched(false);
  }

  return {
    inputValue,
    inputValueIsvalid,
    inputFormIsvalid,
    onChangeHandler,
    onBlurHandler,
    resetData
  }
};

export default useUserForm;