import React ,{useEffect,useState} from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { UseDispatch,useSelector } from 'react-redux';
import { cacheResults } from '../utils/searchSlice';
import { toggleTheme } from '../utils/appSlice';
import { Button } from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";
import SearchBar from './SearchBar';
import NotificationAddIcon from "@mui/icons-material/NotificationAdd";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DarkModeIcon from "@mui/icons-material/DarkMode";


const Head = () => {



  const dispatch=useDispatch();
  const toggleMenuHandler=()=>{

    dispatch (toggleMenu());
     
  };

  const theme=useSelector((store)=>store.app.theme);

  const handleTheme=()=>{
    dispatch(toggleTheme());
  };

  return (
    


    <div
      className={
        "fixed   w-full  py-1 md:py-5 px-2 mt-0 z-30 md:grid md:grid-flow-col md:grid-cols-12 flex items-center " +
        (!theme ? "bg-black" : "bg-white")
      }
    >
     
      <div className="flex py-1 md:col-span-2 justify-center">
        <div className="hidden md:inline-block">
          <Button
            variant="text"
            startIcon={<MenuIcon style={{ fontSize: "2.25rem" }} />}
            style={{
              color: !theme ? "white" : "black",
              textTransform: "none",
            }}
            onClick={toggleMenuHandler}
          ></Button>
        </div>
        <a href="/">
          <img className="w-20 h-10 px-1 md:hidden" alt="logo" src="https://wallpapercave.com/wp/wp11069971.jpg" />
          <img
            className="hidden h-8 px-1 md:inline-block"
            alt="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          />
        </a>
      </div>
      <div className="flex flex-col w-full md:col-span-8 ">
        <SearchBar />
      </div>

      <div className="flex flex-row-reverse items-center md:col-span-2">
        <Button
          variant="text"
          startIcon={<AccountCircleIcon style={{ fontSize: "1.75rem" }} />}
          style={{
            color: !theme ? "white" : "black",
            textTransform: "none",
          }}
        ></Button>

        <div className="hidden md:flex">
          <Button
            variant="text"
            startIcon={<NotificationAddIcon style={{ fontSize: "1.75rem" }} />}
            className=""
            style={{
              color: !theme ? "white" : "black",
              textTransform: "none",
            }}
          ></Button>
        </div>
        <div className="hidden md:flex">
          <Button
            variant="text"
            startIcon={<CreateNewFolderIcon style={{ fontSize: "1.75rem" }} />}
            className=""
            style={{
              color: !theme ? "white" : "black",
              textTransform: "none",
            }}
          ></Button>
        </div>
        <Button
          variant="text"
          startIcon={<DarkModeIcon style={{ fontSize: "1.75rem" }} />}
          className=""
          style={{
            color: !theme ? "white" : "black",
            textTransform: "none",
          }}
          onClick={handleTheme}
        ></Button>
      </div>
      </div>

  )
};


export default Head















{/* // const[searchQuery,setSearchQuery]=useState("");
  // const [suggestions,setSuggestions]=useState([]);
  // const [showSuggestions,setShowSuggestions]=useState(false);

  // const searchCache =useSelector((store)=>store.search);

  const dispatch=useDispatch();


 

  // useEffect(()=>{
    // console.log(searchQuery); */}


    {/* // api calls
    //make an api call after everykey press
    //but if the difference between 2 API calls is <200 ms
    //decline the api call

  //   const timer = setTimeout(()=>{
   

  //   if(searchCache[searchQuery]){
  //     setSuggestions(searchCache[searchQuery]);
  //   }
  //   else{
  //     getSearchSuggestions();
  //   }

  // },200);

  //   return ()=>{
  //     clearTimeout(timer);
  //   }


  // },[searchQuery]);



  // const getSearchSuggestions = async ()=>{

  //   console.log("api call - "+searchQuery);
  //   const data= await fetch(YOUTUBE_SEARCH_API+searchQuery)

  //   const json =await data.json();

  //   // console.log(json[1]);

  //   setSuggestions(json[1]);

  //   dispatch(
  //     cacheResults({
  //     // [searchQuery]:json[1],

  //     [searchQuery]:json[1],

  //   })
    
  //   );
    
  // } */}

{/* // <div className="grid grid-flow-col p-5 m-2 shadow-lg col-span-1"> */}
    {/* //     <div className="flex"> */}
    {/* //         <img */}

    {/* //         onClick={()=>toggleMenuHandler()} */}
    {/* //         className="h-8 cursor-pointer"  */}
    {/* //         alt="menu" */}
    {/* //         src="https://static.vecteezy.com/system/resources/thumbnails/021/190/402/small_2x/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"> */}
    {/* //         </img> */}
    {/* //         <a href="/"> */}
    {/* //         <img > */}
    {/* //         className="h-8 mx-2" */}
    {/* //         alt="youtube-logo"
    //         src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png">

    //         </img>
    //         </a>
    //     </div>

    //     <div className="col-span-10  px-10 ">

    //         <div>
    //           <input className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full" 
    //           type="text"
    //           value={searchQuery}
    //           onChange={(e)=>setSearchQuery(e.target.value)}
    //           onFocus={()=>setShowSuggestions(true)}
    //           onBlur={()=>setShowSuggestions(false)}
    //           />
    //           <button className="border border-gray-400 p-2 rounded-r-full px-5 py-2 bg-gray-100">🔍
    //           </button>
    //         </div>

    //         {showSuggestions && (
    //         <div className=" absolute fixed bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-100">
    //           <ul>
    //             {suggestions.map((s)=>( 
    //             <li key={s} className=" shadow-sm py-2 px-3 hover:bg-gray-100">
    //               🔍{s}
    //               </li>))}
               
               
    //           </ul>
    //         </div>
    //         )}

    //     </div>
    //     <div>
    //         <img className="h-8 col-span-1" alt="user"
    //         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGuafeZPHbbEvob9OolK9lNmUtF7B80asQjt2oMTB6lA&s">

    //         </img>
    //     </div>
    // </div> */}