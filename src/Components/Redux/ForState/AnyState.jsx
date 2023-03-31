import { createSlice } from "@reduxjs/toolkit";

export const AnyState = createSlice({
  name: "AnyState",
  initialState: {
    AnyState: {},
  },
  reducers: {
    // GET USERS
    setAnyState: (state, action) => {
      state.AnyState = action.payload
    //   state.AnyState= [...state.AnyState, action.payload];
    },

  },
});

export const { setAnyState } = AnyState.actions;
// , clear 

export default AnyState.reducer;
