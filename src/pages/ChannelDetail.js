import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import useGetChannelAllVideo from '../hooks/useGetChannelAllVideo';
import useGetChannelDetails from '../hooks/useGetChannelDetails';
import VideoContainer from "../components/VideoContainer";


const ChannelDetail = () => {


  const {channelId}=useParams();

  useGetChannelDetails(channelId);
  useGetChannelAllVideo(channelId);

  const videos=useSelector((store)=>store.video.channelAllVideos)
  const channelDetails=useSelector((store)=>store.video.channelDetails)
  const theme =useSelector((store)=>store.app.theme)
  console.log("videos is",videos)

  if(!videos && !channelDetails) return null;

  const { title, description, thumbnails, customUrl } = channelDetails.snippet;
  const { videoCount, subscriberCount } = channelDetails.statistics;

  // return (
  //   <div>ChannelDetail</div>
  // )

  return (
    <div
      className={`mt-24 flex flex-col  ${
        !theme ? "bg-black text-white" : "bg-whit text-black"
      }`}
    >
      <div className="flex items-center px-2 md:px-10">
        <div className="hidden w-48 md:inline-block">
          <img
            className="w-full rounded-full"
            alt="channel logo"
            src={thumbnails.medium.url ? thumbnails.medium.url :  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGuafeZPHbbEvob9OolK9lNmUtF7B80asQjt2oMTB6lA&s"
          }
          />
        </div>
        <div className="pl-2 md:pl-10">
          <div className="">
            <h1 className="mb-2 text-3xl font-bold">{title}</h1>
            <span className="pr-1">{customUrl}</span>
            <span className="px-1">{subscriberCount} Subscriber</span>
            <span className="px-1 ">{videoCount} video</span>
            <div className="mt-2 ">
              <div>
                {description.split("\n").map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
            </div>
          </div>
          <button
            className={`text-bold mt-4 h-10 w-full md:w-28  px-4 rounded-full ${
              !theme ? "bg-white text-black" : "bg-red-700 text-white"
            }`}
          >
            Subscribe
          </button>
        </div>
      </div>
      <div className="mt-6 border border-gray-500"></div>
      <div
        className={`mt-6 w-full ${
          !theme ? "bg-black text-white" : "bg-whit text-black"
        }`}
      >
        <VideoContainer videos={videos} type={"category"} />{" "}
      </div>
    </div>
  );
}

export default ChannelDetail