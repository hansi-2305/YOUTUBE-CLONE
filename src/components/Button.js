// import React from 'react'

// const Button = ({name}) => {
//   return (
//     <div>
//         <button className="px-5 py-2 m-2 bg-gray-100 rounded-lg">{name}</button>
//     </div>
//   )
// }

// export default Button

//import React, { useContext } from "react";
import { useSelector } from "react-redux";
//import themeContext from "../utils/ThemeContext";

// const Button = ({ name }) => {
//   const theme = useSelector((store) => store.app.theme);
//   //const { theme } = useContext(themeContext);

//   return (
//     <div>
//       <button
//         className={`px-3 py-1 m-2  rounded-lg ${
//           !theme ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
//         }`}
//       >
//         {name}
//       </button>
//     </div>
//   );


const Button = ({ name }) => {
  // const theme=useSelector((stpre))
  return (
    <div>
      <button key={name} className="px-5 py-2 m-2 bg-gray-500 text-white rounded-lg">
        {name}
      </button>
    </div>
  );
};



export default Button;
