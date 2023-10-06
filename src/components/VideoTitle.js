import React from "react";
import { arrow} from "../utils/constants";


const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute bg-gradient-to-r from-black">
      <h1 className="font-bold text-white text-6xl">{title} </h1>
      <p className="py-6 font-semibold text-lg w-1/4 text-white">{overview}</p>
      <div>
        <button className="bg-white text-black rounded-lg px-12 py-4 text-2xl font-bold hover:bg-opacity-80">
          ▶Play
        </button>
        <button className="bg-gray-400 text-white font-bold rounded-lg px-12 py-4 mx-3 text-2xl bg-opacity-50">
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
