
import { useEffect } from "react";
import { GOOGLE_API_KEY } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addCategoryByVideos } from "../utils/searchSlice";

const useGetCategoryByVideos = (category) => {
  const dispatch = useDispatch();
  const getCategoryByVideos = async () => {
    
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&eventType=completed&location=28.7041%2C77.1025&locationRadius=1000km&maxResults=50&order=relevance&q=${category}&regionCode=IN&relevanceLanguage=hi&type=video&key=${GOOGLE_API_KEY}`
    );
    const json = await data.json();
    dispatch(addCategoryByVideos(json.items));
  };
  useEffect(() => {
    getCategoryByVideos();
  }, [category]);
};

export default useGetCategoryByVideos;
