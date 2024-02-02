import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { addVideoDetails } from "../utils/videoSlice";
import { GOOGLE_API_KEY } from "../utils/constants";


const useGetVideoDetail=(movieId)=>{
    const dispatch=useDispatch();

    useEffect(()=>{
       
        getDetails();
    },[]);

    const getDetails = async()=>{

        try {
            const data = await fetch(
              `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${movieId}&key=${GOOGLE_API_KEY}`
            );
    
            const json = await data.json();
            console.log("details fetched",json)
            dispatch(addVideoDetails(json.items[0]));
          } catch (error) {
            console.error("Error fetching video details:", error);
          }
        
    }
};
export default useGetVideoDetail;