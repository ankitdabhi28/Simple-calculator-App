import { createSlice } from "@reduxjs/toolkit";

export const Expression = createSlice({
  name: "Expression",
  initialState: {
    Expression: ([]),
  },
  reducers: {
    // GET USERS
    setExpression: (state, action) => {
      state.Expression = action.payload
    //   state.Expression= [...state.Expression, action.payload];
    },

  },
});

export const { setExpression } = Expression.actions;
// , clear 

export default Expression.reducer;
