import { createSlice } from "@reduxjs/toolkit";

export const Display = createSlice({
  name: "Display",
  initialState: {
    Display: (""),
    Expression: ([]),
  },
  reducers: {
    setDisplay: (state, action) => {
      state.Display = action.payload
    },
    setExpression: (state, action) => {
      state.Expression = action.payload
    },
  },
});

export const { setDisplay , setExpression } = Display.actions;
export default Display.reducer;
