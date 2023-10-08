import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";

function usePopularMovies() {
  //Fetch data from TMDB API and update redux store
  const dispatch = useDispatch();

  const popularMovies = useSelector((store) => store.popularMovies);

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=" +
        Math.floor(Math.random() * 5 + 1),
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
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    if (!popularMovies) getPopularMovies();
  }, []); //without [] it would be an infinite api call
}

export default usePopularMovies;
