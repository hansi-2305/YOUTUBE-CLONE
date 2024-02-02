// // import {useEffect,useState} from 'react'
// // import ChatMessage from './ChatMessage'
// // import { useDispatch, useSelector } from 'react-redux';
// // import { addMessage } from '../utils/chatSlice';
// // import { generateRandomName, makeRandomMessage } from '../utils/helper';



// // const LiveChat = () => {
    
// //     const[liveMessage,setLiveMessage]=useState("")

// //     const dispatch =useDispatch();

// //     const chatMessages=useSelector((store)=>store.chat.messages)

// //     const theme=useSelector((store)=>store.app.theme);

// //     useEffect(()=>{
// //         //API POLLING
// //         const i =setInterval(()=>{
// //             console.log("APU POLLING")

// //             dispatch(addMessage({

// //                 name:generateRandomName(),
// //                 message:makeRandomMessage(20) + "🚀",

// //             }))


// //         },2000);

// //         return ()=>clearInterval(i);

// //     },[]);


// //   return (
// //     <div>
// //     <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
// //         <div>
// //         { //dont use index as keys
        
// //         chatMessages.map((c,i)=><ChatMessage  key={i}
// //        name={c.name}
// //         message={c.message}
// //         />)}
// //         </div>

        
       
// //     </div>


// //         <form className="w-full p-2 ml-2 border border-black" onSubmit={(e)=>{
// //             e.preventDefault();
// //             console.log("ON form submit",liveMessage)

// //             dispatch(addMessage({
// //                 name:"Hanshika",
// //                 message:liveMessage,
// //             })
// //             );
// //             setLiveMessage("")

// //         }}>
// //             <input className="px-2 w-96 " 
// //             type="text"   
// //             value={liveMessage} 
// //             onChange={(e)=>{
// //             setLiveMessage(e.target.value);
// //             }}/>
// //             <button className="px-2 mx-2 bg-green-100">Send</button>
// //         </form>

// //         </div>
// //   )
// // }

// // export default LiveChat



// // // import React, { useEffect, useState } from "react";
// // // import ChatMessage from "./ChatMessage";
// // // import { useDispatch, useSelector } from "react-redux";
// // // import { generateRandomName, makeRandomMessage } from "../utils/helper";
// // // import { addMessage } from "../utils/chatSlice";

// // // const LiveChat = () => {
// // //   const dispatch = useDispatch();
// // //   const [message, setMessage] = useState("");
// // //   const chatMessages = useSelector((store) => store.chat.messages);
// // //   const theme = useSelector((store) => store.app.theme);

// // //   useEffect(() => {
// // //     const i = setInterval(() => {
// // //       // API Polling

// // //       dispatch(
// // //         addMessage({
// // //           name: generateRandomName(),
// // //           message: makeRandomMessage(20) + " 🚀",
// // //         })
// // //       );
// // //     }, 1000);

// // //     return () => clearInterval(i);
// // //   }, []);

// // //   const handleChatOnClick = () => {
// // //     dispatch(addMessage({ name: "vikram", message: message }));
// // //     setMessage("");
// // //   };
// // //   const handleEnterKeyPress = (e) => {
// // //     if (e.key === "Enter") {
// // //       handleChatOnClick();
// // //     }
// // //   };
// // //   return (
// // //     <>
// // //       <div
// // //         className={`mt-24 w-[450px] h-[600px] ml-2 p-2 border   rounded-lg overflow-y-scroll flex flex-col-reverse ${
// // //           !theme
// // //             ? "bg-slate-800 text-white border-black"
// // //             : "bg-slate-100 text-black border-white"
// // //         }`}
// // //       >
// // //         <div>
// // //           {
// // //             // Disclaimer: Don't use indexes as keys
// // //             chatMessages.map((c, i) => (
// // //               <ChatMessage key={i} name={c?.name} message={c?.message} />
// // //             ))
// // //           }
// // //         </div>
// // //       </div>
// // //       <div className="w-[450px] py-1 px-2 mx-2 border border-black rounded-lg ">
// // //         <input
// // //           className="px-2 py-1 mx-2 border border-black rounded-lg w-80"
// // //           type="text"
// // //           placeholder="Chat..."
// // //           value={message}
// // //           onChange={(e) => setMessage(e.target.value)}
// // //           onKeyDown={handleEnterKeyPress} // Handle Enter key press
// // //         />
// // //         <button
// // //           className="w-24 px-2 py-1 bg-gray-400 rounded-lg"
// // //           onClick={handleChatOnClick}
// // //         >
// // //           Send
// // //         </button>
// // //       </div>
// // //     </>
// // //   );
// // // };

// // // export default LiveChat;



// import {useEffect,useState} from 'react'
// import ChatMessage from './ChatMessage'
// import { useDispatch, useSelector } from 'react-redux';
// import { addMessage } from '../utils/chatSlice';
// import { generateRandomName, makeRandomMessage } from '../utils/helper';





// const LiveChat = () => {
    
//     const[liveMessage,setLiveMessage]=useState("")

//     const dispatch =useDispatch();

//     const chatMessages=useSelector((store)=>store.chat.messages)



//     useEffect(()=>{


//         //API POLLING

//         const i =setInterval(()=>{
//             console.log("APU POLLING")

//             dispatch(addMessage({

//                 name:generateRandomName(),
//                 message:makeRandomMessage(20) + "🚀",

//             }))


//         },2000);

//         return ()=>clearInterval(i);

//     },[]);


//   return (
//     <div>
//     <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
//         <div>
//         { //dont use index as keys
        
//         chatMessages.map((c,i)=><ChatMessage  key={i}
//        name={c.name}
//         message={c.message}
//         />)}
//         </div>

        
       
//     </div>


//         <form className="w-full p-2 ml-2 border border-black" onSubmit={(e)=>{
//             e.preventDefault();
//             console.log("ON form submit",liveMessage)

//             dispatch(addMessage({
//                 name:"Hanshika",
//                 message:liveMessage,
//             })
//             );
//             setLiveMessage("")

//         }}>
//             <input className="px-2 w-96 " 
//             type="text"   
//             value={liveMessage} 
//             onChange={(e)=>{
//             setLiveMessage(e.target.value);
//             }}/>
//             <button className="px-2 mx-2 bg-green-100">Send</button>
//         </form>

//         </div>
//   )
// }

// export default LiveChat



import {useEffect,useState} from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, makeRandomMessage } from '../utils/helper';





const LiveChat = () => {

    const[liveMessage,setLiveMessage]=useState("")

    const dispatch =useDispatch();

    const chatMessages=useSelector((store)=>store.chat.messages)
    
    const theme = useSelector((store) => store.app.theme);


    useEffect(()=>{


        //API POLLING

        const i =setInterval(()=>{
            console.log("APU POLLING")

            dispatch(addMessage({

                name:generateRandomName(),
                message:makeRandomMessage(20) + "🚀",

            }))


        },2000);

        return ()=>clearInterval(i);

    },[]);


  return (
    <div>
    <div className={`w-full h-[710px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse  ${
          !theme
            ? "bg-slate-800 text-white border-black"
            : "bg-slate-100 text-black border-white"
        }`}>
        <div>
        { //dont use index as keys

        chatMessages.map((c,i)=><ChatMessage  key={i}
       name={c.name}
        message={c.message}
        />)}
        </div>



    </div>


        <form className="w-full p-2 ml-2 border border-black" onSubmit={(e)=>{
            e.preventDefault();
            console.log("ON form submit",liveMessage)

            dispatch(addMessage({
                name:"Hanshika",
                message:liveMessage,
            })
            );
            setLiveMessage("")

        }}>
            <input className="px-2 w-96 " 
            type="text"   
            value={liveMessage} 
            onChange={(e)=>{
            setLiveMessage(e.target.value);
            }}/>
            <button className="px-2 mx-2 bg-green-100">Send</button>
        </form>

        </div>
  )
}

export default LiveChat