// import React from 'react'

import React,{useState,useEffect} from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCards ,{AdVideoCard} from "./VideoCards";
import { Link } from "react-router-dom";


const VideoContainer = () => {


  const[videos,setVideos]=useState([]);

  useEffect(()=>{

    getVideos();


  },[])

  const getVideos=async()=>{
    const data=await fetch(YOUTUBE_VIDEOS_API);
    const json= await data.json();
    // console.log(json);
    setVideos(json.items)
  };


  return (
    <div className="flex flex-wrap">
      {videos[0] && <AdVideoCard info={videos[0]}/>}
      {
        videos.map(
          (video)=>(
            <Link  key={video.id} to={"/watch?v="+video.id}>
              <VideoCards info={video}/>
              </Link>
          ))
      }
    </div>
  )
}


// const fn =(V)

export default VideoContainer;