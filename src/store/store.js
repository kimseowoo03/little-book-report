import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./user-slice";
import inputSlice from "./input-slice";
import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: { input: inputSlice, ui: uiSlice, user: userSlice },
});

export default store;
