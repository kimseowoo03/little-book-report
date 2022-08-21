import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    errorMessage: null
  },
  reducers: {
    errorManagement (state, action)  {
      state.errorMessage = {
        title: action.payload.title,
        message: action.payload.message
      }
    }
  }
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;