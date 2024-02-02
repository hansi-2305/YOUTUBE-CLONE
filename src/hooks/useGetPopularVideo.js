
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GOOGLE_API_KEY } from "../utils/constants";
import { addPopularVideo } from "../utils/videoSlice";

const useGetPopularVideo = () => {
  const dispatch = useDispatch();
  const popularVideo = useSelector((store) => store.video.popularVideo);
  const [loading, setLoading] = useState(false);
  const [pageToken, setPageToken] = useState(null);

  const getPopularVideo = async () => {
    try {
      setLoading(true);

    //   const response = await fetch(
    //     `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=IN&key=${GOOGLE_API_KEY}&pageToken=${
    //       pageToken || ""
    //     }`
    //   );

    //   const json = await response.json();
    //   dispatch(addPopularVideo(json.items));


    // const data = await fetch(
    //     `https://youtube.googleapis.com/youtube/v3/search?part=snippet&eventType=completed&location=28.7041%2C77.1025&locationRadius=1000km&maxResults=24&order=relevance&q=popular&regionCode=IN&relevanceLanguage=hi&type=video&key=${GOOGLE_API_KEY}&pageToken=1`
    //   );


    const data = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=40&regionCode=IN&key=${GOOGLE_API_KEY}&pageToken=${
          pageToken || ""
        }`
      );
      const json = await data.json();
      console.log("json is",json)
      dispatch(addPopularVideo(json.items));

      // Update the page token for the next request
      setPageToken(json.nextPageToken || null);
    } catch (error) {
      console.error("Error fetching popular videos:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Fetch popular videos when the component mounts
    if (!popularVideo.length) {
      getPopularVideo();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return { popularVideo, loading, getPopularVideo };
};

export default useGetPopularVideo;
