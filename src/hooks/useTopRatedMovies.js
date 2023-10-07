import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import {addTopRatedMovies} from '../utils/movieSlice'

function useTopRatedMovies() {

   //Fetch data from TMDB API and update redux store
   const dispatch=useDispatch();

   const getTopRatedMovies=async ()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);
    const json=await data.json();
    //console.log(json.results);//to see the data
    for (var i = json.results.length - 1; i > 0; i--) { 
      var j = Math.floor(Math.random() * (i + 1));//to shuffle movies of one category
      var temp = json.results[i];
      json.results[i] = json.results[j];
      json.results[j] = temp;
     }
    dispatch(addTopRatedMovies(json.results));
  }

  useEffect(()=> {
    getTopRatedMovies();
  },[])//without [] it would be an infinite api call
}

export default useTopRatedMovies;
