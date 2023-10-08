import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const gpt = useSelector((store) => store.gpt); //actually it returns the whole initialstate objectfrom gptSlice.js
  const { movieNames, movieResults } = gpt;
  if (!movieNames) return null;

  return (
    <div className="p-4 m-4 bg-black bg-opacity-70 text-white">
      <div>
       { movieNames.map((movieName,index) =>
        <MovieList key={index} title={movieName} movies={movieResults[index]} />)}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
