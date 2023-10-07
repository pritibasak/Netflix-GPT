import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    topRatedMovies: null,
    trendingMovies: null,
    popularMovies: null,
    upcomingMovies:null,
    trailerVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload; //whatever movie we will dispatch it will assign here
      //console.log(state.nowPlayingMovies);
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload; //whatever movie we will dispatch it will assign here
      //console.log(state.topRatedMovies);
    },
    addTrendingMovies: (state, action) => {
      state.trendingMovies = action.payload; //whatever movie we will dispatch it will assign here
      //console.log(state.trendingMovies);
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload; //whatever movie we will dispatch it will assign here
      //console.log(state.popularMovies);
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload; //whatever movie we will dispatch it will assign here
      //console.log(state.popularMovies);
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload; //whatever trailer we will dispatch it will assign here
    },
  },
});

export const {
  addNowPlayingMovies,
  addTopRatedMovies,
  addTrendingMovies,
  addPopularMovies,
  addUpcomingMovies,
  addTrailerVideo,
} = movieSlice.actions;

export default movieSlice.reducer;
