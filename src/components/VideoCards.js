// // // import React from 'react'
// // import { useEffect } from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { setLive } from '../utils/appSlice';
// // // import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// // import TimeAgo from './TimeAgo';
// // import RelatedVideo from './RelatedVideo';
// // import RelatedCard from './RelatedCard';



// // const VideoCards = ({video,ad,type}) => {
  

// //     // console.log("ok",video);
// //     const dispatch =useDispatch();
// //     const theme=useSelector((store)=>store.app.theme);

    
// //     useEffect(() => {
// //       const { snippet } = video;
// //       if (snippet && snippet.liveBrodcastContent === 'live') {
// //         dispatch(setLive(true));
// //       } else {
// //         dispatch(setLive(false));
// //       }
// //     }, [dispatch, video]);
// //     const {snippet}=video;

// //     if(!snippet) return null;
// //     const {channelTitle,title,liveBrodcastContent,publishTime,viewCount,thumbnails}=snippet;

// //     if (!thumbnails || !thumbnails.medium) {
// //       // Handle the case where thumbnails or medium property is undefined
// //       return null;
// //     }

// //     const {medium} =snippet.thumbnails;
    
// //     // console.log(type);

// //     // if(type==="related")
// //     // {
// //     //   {console.log("print")}
// //     //   <RelatedCard video={video}/>
// //     //   return null;
// //     // }
    
    

// //   return (
// //     <div 
// //     className="p-2 m-2 w-80 h-full shadow-lg flex flex-col">
// //       <div>
// //        <img className="mt-2 w-full h-full rounded-lg" alt="thumbnail" src={medium.url} />
// //        </div>

// //        <div className='flex  justify-between'>
// //        <div className='" w-[350px] h-full"' >
// //           <img
// //             className="w-12 h-10 rounded-full mt-2 mr-8 px-2 "
// //             alt={`${channelTitle} logo`}
// //             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGuafeZPHbbEvob9OolK9lNmUtF7B80asQjt2oMTB6lA&s"
// //           />
// //         </div>
// //          <div>
// //          <ul>
// //           <li className="font-bold py-2 line-clamp-3 ">{title}</li>
// //           <li>{channelTitle}</li>
// //           <li className='flex'>{viewCount}views
// //            <span className="px-4"> 
// //            <TimeAgo publishTime={publishTime} /></span></li>
// //          </ul>

// //          </div>
// //        </div>
       
// //     </div>
// //   )
  
// // }


// // export const AdVideoCard =({video})=>{    //higher order funnction

// //   return (
// //     <div className="p-1 m-1 border border-red-900">
// //       <VideoCards video={video} ad={true}/>
// //     </div>
// //   )

// // }

// // export default VideoCards



// // ... (import statements)


//  import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { setLive } from '../utils/appSlice';
// // import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import TimeAgo from './TimeAgo';
// import RelatedVideo from './RelatedVideo';
// import RelatedCard from './RelatedCard';

// const VideoCards = ({ video, ad, type }) => {
//   const dispatch = useDispatch();
//   const theme = useSelector((store) => store.app.theme);

//   // useEffect(() => {
//   //   const { snippet } = video;
//   //   console.log("pura detail",video)
//   //   // console.log("ples live aajjaa",snippet.liveBrodcastContent)
//   //   if (snippet && snippet.liveBrodcastContent === 'live') {
//   //     dispatch(setLive(true));
//   //   } else {
//   //     dispatch(setLive(false));
//   //   }
//   // }, [dispatch, video]);



//   useEffect(() => {
//     const { snippet } = video;

//     // Ensure snippet and liveBrodcastContent exist before accessing
//     if (snippet && snippet.liveBrodcastContent) {
//       if (snippet.liveBrodcastContent === 'live') {
//         dispatch(setLive(true));
//       } else {
//         dispatch(setLive(false));
//       }
//     }
//   }, [dispatch, video]);
//   const { snippet } = video;

//   if (!snippet) return null;

//   const {
//     channelTitle,
//     title,
//     liveBrodcastContent,
//     publishTime,
//     viewCount,
//     thumbnails,
//   } = snippet;

//   if (!thumbnails || !thumbnails.medium) {
//     return null;
//   }

//   const { medium } = snippet.thumbnails;

//   return (
//     <div className="p-2 m-2 w-80 h-full shadow-lg flex flex-col">
//       <div>
//         <img
//           className="mt-2 w-full h-full rounded-lg"
//           alt="thumbnail"
//           src={medium.url}
//         />
//       </div>

//       <div className="flex justify-between mt-2">
//         <div className="w-1/4">
//           <img
//             className="w-12 h-12 rounded-full"
//             alt={`${channelTitle} logo`}
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGuafeZPHbbEvob9OolK9lNmUtF7B80asQjt2oMTB6lA&s"
//           />
//         </div>
//         <div className="w-3/4 ml-4">
//           <ul>
//             <li className="font-bold py-2 line-clamp-1">{title}</li>
//             <li>{channelTitle}</li>
//             <li className="flex items-center">
//               {viewCount} views{' '}
//               <span className="px-4">
//                 <TimeAgo publishTime={publishTime} />
//               </span>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export const AdVideoCard = ({ video }) => {
//   return (
//     <div className="p-1 m-1 border border-red-900">
//       <VideoCards video={video} ad={true} />
//     </div>
//   );
// };

// export default VideoCards;


// ... (import statements)

// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { setLive } from '../utils/appSlice';
// import TimeAgo from './TimeAgo';

// const VideoCards = ({ video, ad, type }) => {
//   const dispatch = useDispatch();
//   const theme = useSelector((store) => store.app.theme);
//   // const live=useSelector()
//   useEffect(() => {
//     const { snippet } = video;

//     // console.log("joker",video)

//     // Ensure snippet and liveBrodcastContent exist before accessing
//     if (snippet && snippet.liveBrodcastContent) {
//       if (snippet.liveBrodcastContent === 'live') {
//         dispatch(setLive(true));
//       } else {
//         dispatch(setLive(false));
//       }
//     }
//   }, [dispatch, video]);

//   const { snippet } = video;

//   if (!snippet) return null;

//   const {
//     channelTitle,
//     title,
//     liveBrodcastContent,
//     publishTime,
//     viewCount,
//     thumbnails,
//   } = snippet;

//   if (!thumbnails || !thumbnails.medium) {
//     return null;
//   }

//   const { medium } = snippet.thumbnails;

//   return (
//     <div className="p-2 m-2 w-80 h-full shadow-lg flex flex-col">
//       <div>
//         <img
//           className="mt-2 w-full h-full rounded-lg"
//           alt="thumbnail"
//           src={medium.url}
//         />
//       </div>

//       <div className="flex justify-between mt-2">
//         <div className="w-1/4">
//           <img
//             className="w-12 h-12 rounded-full"
//             alt={`${channelTitle} logo`}
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGuafeZPHbbEvob9OolK9lNmUtF7B80asQjt2oMTB6lA&s"
//           />
//         </div>
//         <div className="w-3/4 ml-4">
//           <ul>
//             <li className="font-bold py-2 line-clamp-1">{title}</li>
//             <li>{channelTitle}</li>
//             <li className="flex items-center">
//               {viewCount} views{' '}
//               <span className="px-4">
//                 <TimeAgo publishTime={publishTime} />
//               </span>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export const AdVideoCard = ({ video }) => {
//   return (
//     <div className="p-1 m-1 border border-red-900">
// //       <VideoCards video={video} ad={true} />
// //     </div>
// //   );
// // };

// // export default VideoCards;


// // VideoCards.js

// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { setLive } from '../utils/appSlice'; // Import the setLive action
// import TimeAgo from './TimeAgo';

// const VideoCards = ({ video, ad, type }) => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const { snippet } = video;

//     // Ensure snippet and liveBrodcastContent exist before accessing
//     if (snippet && snippet.liveBrodcastContent) {
//       const isLive = snippet.liveBrodcastContent === 'live';
//       dispatch(setLive(isLive));
//     }
//   }, [dispatch, video]);

//   const { snippet } = video;

//   if (!snippet) return null;

//   const {
//     channelTitle,
//     title,
//     publishTime,
//     viewCount,
//     thumbnails,
//   } = snippet;

//   if (!thumbnails || !thumbnails.medium) {
//     return null;
//   }

//   const { medium } = snippet.thumbnails;

//   return (
//     <div className="p-2 m-2 w-80 h-full shadow-lg flex flex-col">
//       <div>
//         <img
//           className="mt-2 w-full h-full rounded-lg"
//           alt="thumbnail"
//           src={medium.url}
//         />
//       </div>

//       <div className="flex justify-between mt-2">
//         <div className="w-1/4">
//           <img
//             className="w-12 h-12 rounded-full"
//             alt={`${channelTitle} logo`}
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGuafeZPHbbEvob9OolK9lNmUtF7B80asQjt2oMTB6lA&s"
//           />
//         </div>
//         <div className="w-3/4 ml-4">
//           <ul>
//             <li className="font-bold py-2 line-clamp-1">{title}</li>
//             <li>{channelTitle}</li>
//             <li className="flex items-center">
//               {viewCount} views{' '}
//               <span className="px-4">
//                 <TimeAgo publishTime={publishTime} />
//               </span>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export const AdVideoCard = ({ video }) => {
//   return (
//     <div className="p-1 m-1 border border-red-900">
//       <VideoCards video={video} ad={true} />
//     </div>
//   );
// };

// export default VideoCards;



import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLive } from '../utils/appSlice';
import TimeAgo from './TimeAgo';
import RelatedVideo from './RelatedVideo';
import RelatedCard from './RelatedCard';

const VideoCards = ({ video, ad, type }) => {
  const dispatch = useDispatch();
  const theme = useSelector((store) => store.app.theme);

  useEffect(() => {
    const { snippet } = video;

    // Check if liveBroadcastContent is present and has a value of 'live'
    if (snippet && 'liveBroadcastContent' in snippet && snippet.liveBroadcastContent === 'live') {
      dispatch(setLive(true));
    } else {
      dispatch(setLive(false));
    }
  }, [dispatch, video]);

  const { snippet } = video;

  if (!snippet) return null;

  const {
    channelTitle,
    title,
    liveBroadcastContent,
    publishTime,
    viewCount,
    thumbnails,
  } = snippet;

  if (!thumbnails || !thumbnails.medium) {
    return null;
  }

  const { medium } = snippet.thumbnails;

  return (
    <div className="p-2 m-2 w-80 h-full shadow-lg flex flex-col">
      <div>
        <img
          className="mt-2 w-full h-full rounded-lg"
          alt="thumbnail"
          src={medium.url}
        />
      </div>

      <div className="flex justify-between mt-2">
        <div className="w-1/4">
          <img
            className="w-12 h-12 rounded-full"
            alt={`${channelTitle} logo`}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGuafeZPHbbEvob9OolK9lNmUtF7B80asQjt2oMTB6lA&s"
          />
        </div>
        <div className="w-3/4 ml-4">
          <ul>
            <li className="font-bold py-2 line-clamp-3">{title}</li>
            <li>{channelTitle}</li>
            <li className="flex items-center">
              {viewCount} views{' '}
              <span className="px-4">
                <TimeAgo publishTime={publishTime} />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export const AdVideoCard = ({ video }) => {
  return (
    <div className="p-1 m-1 border border-red-900">
      <VideoCards video={video} ad={true} />
    </div>
  );
};

export default VideoCards;
