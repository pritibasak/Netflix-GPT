import React from "react";
import { BG_URL } from "../utils/constants";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";

const GptSearch = () => {
  return (
   <>
      <div className="fixed -z-10">
        <img className="h-screen object-cover md:w-screen"src={BG_URL} alt="BG" />
      </div>
       <div className="">
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
    </>
  );
};

export default GptSearch;
