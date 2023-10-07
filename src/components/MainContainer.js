import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
    const movies=useSelector(store=>store.movies?.nowPlayingMovies);
    //console.log(movies);
   // if(!movies) return;
    if(movies === null) return; //because initially redux store is null so let it return withour render
    //it's called early return
    //const mainMovie=movies[0];
    const mainMovie=movies[Math.floor(Math.random()*20)];//random working well with movie id for title and overview
    //but not working for the corresponding trailer
    //console.log(mainMovie);

    const {original_title,overview,id}=mainMovie;
  return (
    <div>
      <VideoTitle title={original_title} overview={overview}/>
      <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer
