import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increaseCount: (state) => {
      state.count = state.count + 1;
    },
    decreaseCount: (state) => {
      state.count = state.count - 1;
    },
  },
});

export default counterSlice.reducer;

export const { increaseCount, decreaseCount } = counterSlice.actions;
