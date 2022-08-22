import { configureStore } from "@reduxjs/toolkit";
import inputSlice from "./input-slice";
import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: { input:  inputSlice, ui: uiSlice}
})

export default store;