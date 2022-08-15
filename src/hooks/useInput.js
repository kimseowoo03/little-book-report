import { useState } from "react";

const useInput = (inputValueIsvalidFun) => {
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

export default useInput;