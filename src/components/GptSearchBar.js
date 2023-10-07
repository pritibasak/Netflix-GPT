import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {

  const language = useSelector((store) => store.config.lang);
  //console.log(language)
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[language].gptSearchPlaceHolder}
        />
        <button className="py-2 px-4 m-4 col-span-3 rounded-md bg-red-500 text-white">
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
