import { createSlice } from "@reduxjs/toolkit";
import { sendReviewList } from "./input-actions";
const uiSlice = createSlice({
  name: "ui",
  initialState: {
    errorMessage: null
  },
  reducers: {
  },
  extraReducers: {
    [sendReviewList.pending]: (state, action) => {
      state.errorMessage = {
        title: 'Pending!',
        message: '보내는 중입니다.'
      }
      console.log(state.errorMessage)
      console.log('보내는 중!')
    },
    [sendReviewList.fulfilled]: (state, action) => {
      state.errorMessage = {
        title: 'Fulfilled!',
        message: '잘 보냈습니다!'
      }
      console.log(state.errorMessage)
      console.log('잘 보냄!')
    },
    [sendReviewList.rejected]: (state, action) => {
      state.errorMessage = {
        title: "Rejected",
        message: "보내는데 실패했습니다."
      }
      console.log('실패!')
    }
  }
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;