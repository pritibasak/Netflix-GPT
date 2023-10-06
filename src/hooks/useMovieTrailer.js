import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { addTrailerVideo } from '../utils/movieSlice';
import { useDispatch } from 'react-redux';

const useMovieTrailer = (movieId) => {
    const dispatch=useDispatch();
//fetch trailer video & updating redux store
const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-U",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);
    const filterData = json.results.filter((video) => video.type === "Trailer");
    //if more than one trailer presents we can take
    //filterData and then trailer=filterData[0]
    //however here I've considered perhaps if any movie has more than one trailer
    const trailer = filterData.length ? filterData[0] : json.results[0]; //if trailer doesn't exist
    //setTrailerId(trailer.key);
    console.log(trailer);
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);

}

export default useMovieTrailer
