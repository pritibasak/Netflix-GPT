import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
  },
  reducers: {
    //it will be used to show/hide my gpt search
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch; //toggling if true->false, if false->true
    },
  },
});

export const {toggleGptSearchView}=gptSlice.actions;

export default gptSlice.reducer;