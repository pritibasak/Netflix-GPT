import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieNames:null,
    movieResults:null,
  },

  reducers: {
    //it will be used to show/hide my gpt search
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch; //toggling if true->false, if false->true
    },
    addGptMovieResult:(state,action)=>{
     const {movieNames, movieResults}=action.payload;
     state.movieNames=movieNames;
     state.movieResults=movieResults;
     //console.log(state.gptMovie)
    }
  },
});

export const {toggleGptSearchView,addGptMovieResult}=gptSlice.actions;

export default gptSlice.reducer;