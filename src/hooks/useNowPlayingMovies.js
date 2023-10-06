import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../utils/movieSlice'

function useNowPlayingMovies() {

   //Fetch data from TMDB API and update redux store
   const dispatch=useDispatch();

   const getNowPlayingMovies=async ()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
    const json=await data.json();
    console.log(json.results);//to see the data
    dispatch(addNowPlayingMovies(json.results));
  }

  useEffect(()=> {
    getNowPlayingMovies();
  },[])//without [] it would be an infinite api call
}

export default useNowPlayingMovies;
