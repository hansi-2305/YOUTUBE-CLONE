// import React from 'react'
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux'
import useGetPopularVideo from '../hooks/useGetPopularVideo';
import VideoCards, { AdVideoCard } from './VideoCards';
import { Link } from 'react-router-dom';

const PopularVideo = () => {

    const theme=useSelector((store)=>store.app.theme);

    const {getPopularVideo}=useGetPopularVideo();

    const containerRef=useRef();

    const videos=useSelector((store)=>store.video.popularVideo)
    console.log("aaja",videos)
    console.log("koii")
    const handleScroll=()=>{
        const container =containerRef.current;

        if(container && container.scrollTop + container.clientHeight >=container.scrollHeight-50)
        {
            getPopularVideo();
        }

    }

    useEffect(()=>{
        const container =containerRef.current;

        if(container){
            container.addEventListener("scroll",handleScroll);
        }

        return ()=>{
            if(container)
            {
                container.removeEventListener("scroll",handleScroll);
            }
        };
    },[getPopularVideo])
    // console.log("look",videos)

    if(!videos || !videos.length){
        return null
    }
    //  return null;
    const videosToRender = videos.slice(1);

     return (
        <div
      className={` justify-center flex flex-wrap overflow-y-auto pt-12 ${
        !theme ? "bg-black" : "bg-white"}`}

      ref={containerRef}
      style={{ maxHeight: "180vh" }}
    >
        {/* {<AdVideoCard video={videos[1]}/>} */}
        {videosToRender.map((video, index) => (
        <Link
        to={`/watch?v=${video.id}`} key={index}>
          <VideoCards video={video} ad={false} type={"popular"} />
        </Link>
      ))}

     </div>


    )



  
}

export default PopularVideo




