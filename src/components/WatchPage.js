import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeMenu ,openMenu} from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';
import VideoDetails from './VideoDetails';
import RelatedVideo from './RelatedVideo';

const WatchPage = () => {

    const [searchParams]=useSearchParams();

    const id = searchParams.get("v");

    // console.log(searchParams.get("v"));

    const dispatch = useDispatch();

    const Live=useSelector((store)=>store.app.Live);

    const isMenuOpen=useSelector((store)=>store.app.isMenuOpen);

    console.log("click is",Live)


    useEffect(()=>{

        dispatch(closeMenu());
        return ()=>{
          dispatch(openMenu());
        }

    },[])

  return (
    <div className={`flex-col flex md:flex-row ${
      isMenuOpen ? "md:ml-0" : "md:ml-20" } `}>

    <div className="flex flex-col mt-15 h-full">
        <div className="">
        <iframe 
        className="rounded-xl w-screen h-[250px] md:mt-6 md:h-[500px] md:w-[1000px] md:mt-0 " 
        src={"https://www.youtube.com/embed/"+id} title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"

        allowFullScreen>

        </iframe>

        </div>
        

        <div className='flex flex-col overflow-hidden md:w-[1000px]'>

          <VideoDetails movieId={id}/>
          <CommentsContainer/>

        </div>
      </div>

     {/* { console.log("live is",live)} */}

        <div className="w-full">

          {Live ? <LiveChat/>:<RelatedVideo/>}

        </div>
    </div>
  )
}

export default WatchPage