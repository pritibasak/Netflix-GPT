import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const searchText = useRef(null); //to refer to the gpt search box input entry

  const dispatch = useDispatch();

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    //open ai gpt itself doen't have intelligence however it has been trained in some best manner
    //So while querying we need to put our query in very eficient way or prominent way
    //So that we can get better results
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    //make an API call to get GPT API & get movie suggestions
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    if (!gptResults.choices) {
      //TODO: Write Error Handling
      //I apologize, but "jhbjnhknjklklkmlk;p" doesn't provide any context or keywords for movie recommendations. Could you please provide some preferences or genres to assist in better suggesting movies?
      //by default gpt returns this above message if no movie found as per the query
    }
    //console.log(gptResults.choices[0].message.content);
    const gptMovies = gptResults.choices[0]?.message?.content.split(","); //an array of 5 movies
    console.log(gptMovies);
    //For each movie found by search and in returned array, I will call now TMDB movie search API to find in tmdb database
    const promiseArray = gptMovies.map((gptMovie) => searchMovieTMDB(gptMovie));
    //map functions will iterate immediately on each array element
    //instantly the async function searchMovieTMDB will be called consecutively five times
    //async function always takes little time to return results as it's asynchronous in nature
    //async returns promise which takes some time to get resolved or rejected
    //so the problem is each async call will return individual promises so total 5 promises
    //so searchMovieTMDB will return promise but not actual result what we want
    //so we will get array of 5 promises here [p,p,p,p,p] instead of getting [json.results,json.results,json.results,json.results,json.results]
    //we need to use Promise.all function to retrieve the information of each movie from each promise object of array
    //Promise.all() takes an array of promises as argument always

    const moviesFromPromiseArray = await Promise.all(promiseArray);
    //this await actually helps Promise.all to get resolved
    //So my program will await to finish the promises get resolved
    //Promise.all() will stop working once all promises will be solved
    //
    console.log(moviesFromPromiseArray);
    //movieFromPromiseArray is an array of 5 resolved/rejected promises
    //movieFromPromiseArray will hold an array of 5 arrays where each array holds details of that movie
    /*moviesFromPromiseArray.map((movieFromPromiseArray) =>
      dispatch(addGptMovieResult(movieFromPromiseArray))
    );*/
    dispatch(
      addGptMovieResult({
        movieNames: gptMovies,
        movieResults: moviesFromPromiseArray,
      })
    );
  };

  //search movie in the tmdb database by api call
  const searchMovieTMDB = async (gptMovie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        gptMovie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    //console.log(json);
    return json.results;
  };

  const language = useSelector((store) => store.config.lang);
  //console.log(language)
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        {/* e=>e.preventDefault() helps to prevent the default acton or behaviour of the form ie submit and refresh the page  once we hit search button
         */}
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[language].gptSearchPlaceHolder}
        />
        <button
          className="py-2 px-4 m-4 col-span-3 rounded-md bg-red-500 text-white hover:bg-opacity-50"
          onClick={handleGptSearchClick}
        >
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
