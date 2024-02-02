import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'
import WatchPage from './WatchPage'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Body = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const theme = useSelector((store) => store.app.theme);
  //const { theme } = useContext(themeContext);

  return (
    <div className="flex ">
      <div className="hidden md:inline-block">{isMenuOpen && <Sidebar />}</div>

      <div
        className={`main-container ${
          isMenuOpen ? "md:ml-[180px] w-full" : ""
        }  ${!theme ? "bg-black text-white" : "bg-white text-black"} `}
      >
        {/* <MainContainer/> */}
        <Outlet />
      </div>
    </div>
  );
}

export default Body