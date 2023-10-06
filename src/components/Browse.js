import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
   useNowPlayingMovies();
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
