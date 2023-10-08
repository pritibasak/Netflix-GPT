import React from "react";
import { arrow} from "../utils/constants";


const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute bg-gradient-to-r from-black">
      <h1 className="font-bold text-white md:text-6xl text-xl md:my-0">{title} </h1>
      <p className="hidden md:inline-block py-6 font-semibold text-md w-1/4 text-white">{overview.substr(0,overview.indexOf('.')+1)}</p>
      <div>
        <button className="bg-white text-black rounded-lg px-1 py-1 my-4 md:my-0 md:px-12 md:py-4 md:text-2xl text-lg font-semibold hover:bg-opacity-80">
          ▶Play
        </button>
        <button className="hidden md:inline-block md:rounded-lg bg-gray-400 text-white font-semibold px-12 py-4 mx-3 text-2xl bg-opacity-50">
          <img
            src="https://icon-library.com/images/information-icon-white/information-icon-white-6.jpg"
            alt="info"
            className="w-10 absolute left-72"
          />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
