import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useTrendingMovies from '../hooks/useTrendingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';

const Browse = () => {
   useNowPlayingMovies();
   useTopRatedMovies();
   useTrendingMovies();
   usePopularMovies();
   useUpcomingMovies();
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
      {
        /*
         * Two sections of the browse page
         * Maincontainer
             --Video Background playing
             --Video title with short description
         * Secondary Container
             --MovieList * N
                --Each movie catefory contains movie cards
         *
         */
      }
    </div>
  )
}

export default Browse
