//import React from 'react'

const useShuffleMovies = (movies) => {
    for (var i = movies.length - 1; i > 0; i--) {
        // Generate random number 
        var j = Math.floor(Math.random() * (i + 1));

        var temp = movies[i];
        movies[i] = movies[j];
        movies[j] = temp;
    }

  return movies


}

export default useShuffleMovies
