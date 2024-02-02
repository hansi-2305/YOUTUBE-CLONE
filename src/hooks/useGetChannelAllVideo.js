import { useEffect } from "react";
import { GOOGLE_API_KEY, MAX_VIDEO_COUNT } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addChannelAllVideos} from "../utils/videoSlice";

const useGetChannelAllVideo = (channelId) => {
  const dispatch = useDispatch();
  const getChannelAllVideo = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=${60}&type=video&key=${GOOGLE_API_KEY}`
    );
    const json = await data.json();

    console.log("json",json)
    dispatch(addChannelAllVideos(json.items));
  };

  useEffect(() => {
    getChannelAllVideo();
  }, [channelId]);
};

export default useGetChannelAllVideo;
