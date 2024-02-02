import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { addLiveVideos } from "../utils/searchSlice";
import { GOOGLE_API_KEY } from "../utils/constants";

const useGetLiveVideos=()=>{
    const dispatch=useDispatch();
    const getLiveVideos=async()=>{
        const data= await fetch(
            `https://youtube.googleapis.com/youtube/v3/search?part=snippet&eventType=live&location=28.7041%2C77.1025&locationRadius=1000km&maxResults=${100}&q=live&regionCode=IN&relevanceLanguage=hi&type=video&key=${GOOGLE_API_KEY}`
        

        );
        const json=await data.json();
        dispatch(addLiveVideos(json.items));
    };
    useEffect(()=>{
        getLiveVideos();
    },[]);
};

export default useGetLiveVideos