import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./user-slice";
import reviewSlice from "./review-slice";
import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: { review: reviewSlice, ui: uiSlice, user: userSlice },
});

export default store;
