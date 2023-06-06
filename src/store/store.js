import { configureStore } from "@reduxjs/toolkit";

import logger from "redux-logger";

import userSlice from "./user-slice";
import reviewSlice from "./review-slice";
import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: { review: reviewSlice, ui: uiSlice, user: userSlice },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
});

export default store;
