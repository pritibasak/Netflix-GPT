import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addTrendingMovies } from '../utils/movieSlice'

function useTrendingMovies() {

   //Fetch data from TMDB API and update redux store
   const dispatch=useDispatch();

   const getTrendingMovies=async ()=>{
    const data=await fetch('https://api.themoviedb.org/3/trending/movie/day', API_OPTIONS);
    const json=await data.json();
    //console.log(json.results);//to see the data
    for (var i = json.results.length - 1; i > 0; i--) { 
      var j = Math.floor(Math.random() * (i + 1));//to shuffle movies of one category
      var temp = json.results[i];
      json.results[i] = json.results[j];
      json.results[j] = temp;
     }
    dispatch(addTrendingMovies(json.results));
  }

  useEffect(()=> {
    getTrendingMovies();
  },[])//without [] it would be an infinite api call
}

export default useTrendingMovies;
