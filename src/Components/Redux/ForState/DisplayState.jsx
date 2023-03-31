import { createSlice } from "@reduxjs/toolkit";

export const Display = createSlice({
  name: "Display",
  initialState: {
    Display: (""),
  },
  reducers: {
    // GET USERS
    setDisplay: (state, action) => {
      state.Display = action.payload
    //   state.Display= [...state.Display, action.payload];
    },

  },
});

export const { setDisplay } = Display.actions;
// , clear 

export default Display.reducer;
