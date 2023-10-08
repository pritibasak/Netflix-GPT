import React from 'react'
import {IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({posterPath}) => {
  //const {posterPath}=props;
  return posterPath && (
    <div className='w-40 md:w-48 pr-4 transform transition duration-500 hover:scale-110'>
      <img src={IMG_CDN_URL+posterPath} alt="Movie Card"/>
    </div>
  )
}

export default MovieCard
