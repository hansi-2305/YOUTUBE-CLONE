import React from 'react'
import Button from './Button'
import { useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
// import {}


const ButtonList = () => {

  const theme=useSelector((store)=>store.app.theme);
  console.log("BUTTON")
  const isMenuOpen=useSelector((store)=>store.app.isMenu)

  const list=[
    "All",
    "Live",
    "Gaming",
    "Songs",
    "Live",
    "Education",
    "Cricket",
    "News",
    "Cooking",
    "Valentines",
    "Bhajan",
    "Podcast",
    "Motivation",
  ];

  console.log("list",list)

  return (
    // <div className={` flex fixed  pt-0 w-full z-10 overflow-x-auto md:overflow-x-hidden ${
    //   !theme ? "bg-black" : "bg-white"
    // }`}>
     

    //   {
    //     list.map((name,index)=>(
    //       <Link to={"/category/"+name} key={index}>
    //           {console.log("pls")}
    //       <Button name={name}/>
    //       </Link>
    //     ))
       

    //   }

      

    // </div>

    // <div  className={`flex justify-center items-center bg-gray-800 p-4`}>
    //   {list.map((name, index) => (
    //     <div key={index}>
    //       <button className="px-5 py-2 m-2 bg-blue-500 text-white rounded-lg">
    //         {name}
    //       </button>
    //     </div>
    //   ))}
    // </div>


    // <div className={
    //    !theme ? "bg-black" : "bg-white"}>


    <div className={` flex fixed  pt-0 w-full z-10 overflow-x-auto md:overflow-x-hidden ${
        !theme ? "bg-black" : "bg-white"
      }`}>
      {list.map((name, index) => (
        <Link  to={"/category/" + name}>
        <button
          key={index}
          className="px-5 py-2 m-2 bg-gray-500 text-white rounded-lg"
        >
          {name}
        </button>
        </Link>
      ))}
    </div>




  )
}

export default ButtonList