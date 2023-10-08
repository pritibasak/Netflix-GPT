import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";

function useUpcomingMovies() {
  //Fetch data from TMDB API and update redux store
  const dispatch = useDispatch();

  const upcomingMovies = useSelector((store) => store.upcomingMovies);

  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=" +
        Math.floor(Math.random() * 2 + 1),
      API_OPTIONS
    );
    const json = await data.json();
    //console.log(json.results);//to see the data
    for (var i = json.results.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1)); //to shuffle movies of one category
      var temp = json.results[i];
      json.results[i] = json.results[j];
      json.results[j] = temp;
    }
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    if (!upcomingMovies) getUpcomingMovies();//memoization concept
    //!upcomingMovies && getUpcomingMovies(); //we can write like this also
  }, []); //without [] it would be an infinite api call
}

export default useUpcomingMovies;
