// import React from 'react'

import React,{useState,useEffect} from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCards ,{AdVideoCard} from "./VideoCards";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import RelatedCard from "./RelatedCard";


const VideoContainer = ({videos,type}) => {

  console.log("hii i  am called")

  const theme =useSelector((store)=>store.app.theme);

  const isMenuOpen=useSelector((store)=>store.app.isMenuOpen)

  if(!videos) return null;

  if(isMenuOpen && type==="related") type="popular";


  
  return (
    // <div className= {" absolute justify-center flex flex-wrap" + (!theme ? "bg-black" : "bg-white")}>
    <div
    className={
      "  mt-2 absolute  justify-center  flex flex-wrap "  +
      (!theme ? "bg-black" : "bg-white")
    }>
      {/* {videos[0] && <AdVideoCard info={videos[0]}/>} */}
      {
        // videos.map(
        //   (video)=>(
        //     <Link key={video.id} to={video.id?.videoId ? "/watch?v=" + video.id.videoId : "#"}>
              
        //       {/* <VideoCards video={video} ad={false} type={type}/> */}
             
        //       <RelatedCard video={video}/>
        //       </Link>
        //   ))



        videos.map((video) => (
          <Link
            key={video.etag}
            to={video.id?.videoId ? "/watch?v=" + video.id.videoId : "#"}
          >
            {type === "related" ? (
              <RelatedCard video={video} />
            ) : (
              <VideoCards video={video} ad={false} type={type} />
            )}
          </Link>
        ))
      }
    </div>
  )
}


// const fn =(V)

export default VideoContainer;