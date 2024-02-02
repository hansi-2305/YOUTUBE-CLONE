import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import PopularVideo from './PopularVideo'

const MainContainer = () => {
  console.log("MAIN CONTAINER")
  return (
    <div className="mt-[3rem] md:mt-[6rem] md:m-6  md:bg-black">
        <ButtonList/>
        {/* <VideoContainer/> */}
        <PopularVideo/>

    </div>
  )
}

export default MainContainer