import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload; //whatever movie we will dispatch it will assign here
      console.log(state.nowPlayingMovies);
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload; //whatever trailer we will dispatch it will assign here
    },
  },
});

export const { addNowPlayingMovies ,addTrailerVideo} = movieSlice.actions;

export default movieSlice.reducer;
