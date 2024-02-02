




// // // // // // import React from 'react'
// // // // // // import { useDispatch, useSelector } from 'react-redux'
// // // // // // import TimeAgo from "./TimeAgo";


// // // // // // const RelatedCard = ({video}) => {

// // // // // //     console.log("loo",video)

// // // // // //     const dispatch=useDispatch();

// // // // // //     const theme=useSelector((store)=>store.app.theme);

// // // // // //     const {snippet}=video;

// // // // // //     if(!snippet) return null;

// // // // // //  const {title,channelTitle,description,liveBroadcastContent,publishTime,thumbnails} = video.snippet;

// // // // // //  if (!thumbnails || !thumbnails.medium) {
// // // // // //     // Handle the case where thumbnails or medium property is undefined
// // // // // //     return null;
// // // // // //   }
// // // // // //   const { medium } = snippet.thumbnails;


// // // // // //   return (
// // // // // //     <div className={"flex flex-col m-2" +(!theme ? "text-white" : "text-black")}>
// // // // // //         <div className='w-50'>
// // // // // //             <img className='w-full h-full rounded-lg' alt="seach"
// // // // // //             src={medium.url}/>
// // // // // //         </div>

// // // // // //         <div className='w-[300px] flex flex-col overflow-hidden ml-3'>
// // // // // //             <h1 className='font-bold line-clamp-1 overflow-hidden'>
// // // // // //                 {title}
// // // // // //             </h1>

// // // // // //             <div className="flex pt-2">
// // // // // //             <img className="w-8 h-8 rounded-full"alt="channel logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGuafeZPHbbEvob9OolK9lNmUtF7B80asQjt2oMTB6lA&s" />

// // // // // //             <div className='flex flex-col'>
// // // // // //             <span className="px-3 py-1 font-bold">{channelTitle}</span>
// // // // // //             <TimeAgo publishTime={publishTime} />

// // // // // //             </div>
// // // // // //         </div>
// // // // // //         </div>

        



// // // // // //     </div>
// // // // // //   )
// // // // // // };

// // // // // // export default RelatedCard



// // // // // import React from 'react';
// // // // // import { useDispatch, useSelector } from 'react-redux';
// // // // // import TimeAgo from './TimeAgo';

// // // // // const RelatedCard = ({ video }) => {
// // // // //   console.log('loo', video);

// // // // //   const dispatch = useDispatch();
// // // // //   const theme = useSelector((store) => store.app.theme);

// // // // //   const { snippet } = video;

// // // // //   if (!snippet) return null;

// // // // //   const { title, channelTitle, description, liveBroadcastContent, publishTime, thumbnails } = video.snippet;

// // // // //   if (!thumbnails || !thumbnails.medium) {
// // // // //     // Handle the case where thumbnails or medium property is undefined
// // // // //     return null;
// // // // //   }
// // // // //   const { medium } = snippet.thumbnails;

// // // // //   return (
// // // // //     <div className={`flex flex-col m-2 ${!theme ? 'text-white' : 'text-black'}`}>
// // // // //       <div className="w-50">
// // // // //         <img className="w-full h-full rounded-lg" alt="seach" src={medium.url} />
// // // // //       </div>

// // // // //       <div className="w-[300px] flex flex-col overflow-hidden ml-3">
// // // // //         <h1 className="font-bold line-clamp-1 overflow-hidden">{title}</h1>

// // // // //         <div className="flex pt-2 items-center">
// // // // //           <img
// // // // //             className="w-8 h-8 rounded-full"
// // // // //             alt="channel logo"
// // // // //             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGuafeZPHbbEvob9OolK9lNmUtF7B80asQjt2oMTB6lA&s"
// // // // //           />

// // // // //           <div className="flex flex-col ml-3">
// // // // //             <span className="px-3 py-1 font-bold">{channelTitle}</span>
// // // // //             <TimeAgo publishTime={publishTime} />
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default RelatedCard;



// // // // import React from 'react';
// // // // import { useDispatch, useSelector } from 'react-redux';
// // // // import TimeAgo from './TimeAgo';

// // // // const RelatedCard = ({ video }) => {
// // // //   console.log('loo', video);

// // // //   const dispatch = useDispatch();
// // // //   const theme = useSelector((store) => store.app.theme);

// // // //   const { snippet } = video;

// // // //   if (!snippet) return null;

// // // //   const { title, channelTitle, description, liveBroadcastContent, publishTime, thumbnails } = video.snippet;

// // // //   if (!thumbnails || !thumbnails.medium) {
// // // //     // Handle the case where thumbnails or medium property is undefined
// // // //     return null;
// // // //   }
// // // //   const { medium } = snippet.thumbnails;

// // // //   return (
// // // //     <div className={`flex m-2 ${!theme ? 'text-white' : 'text-black'}`}>
// // // //       <div className="w-1/3">
// // // //         <img className="w-full h-full rounded-lg" alt="seach" src={medium.url} />
// // // //       </div>

// // // //       <div className="w-2/3 ml-3">
// // // //         <h1 className="font-bold line-clamp-1 overflow-hidden">{title}</h1>

// // // //         <div className="flex pt-2 items-center">
// // // //           <img
// // // //             className="w-8 h-8 rounded-full"
// // // //             alt="channel logo"
// // // //             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGuafeZPHbbEvob9OolK9lNmUtF7B80asQjt2oMTB6lA&s"
// // // //           />

// // // //           <div className="flex flex-col ml-3">
// // // //             <span className="px-3 py-1 font-bold">{channelTitle}</span>
// // // //             <TimeAgo publishTime={publishTime} />
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default RelatedCard;


// // // import React from 'react';
// // // import { useDispatch, useSelector } from 'react-redux';
// // // import TimeAgo from './TimeAgo';

// // // const RelatedCard = ({ video }) => {
// // //   console.log('loo', video);

// // //   const dispatch = useDispatch();
// // //   const theme = useSelector((store) => store.app.theme);

// // //   const { snippet } = video;

// // //   if (!snippet) return null;

// // //   const { title, channelTitle, description, liveBroadcastContent, publishTime, thumbnails } = video.snippet;

// // //   if (!thumbnails || !thumbnails.medium) {
// // //     // Handle the case where thumbnails or medium property is undefined
// // //     return null;
// // //   }
// // //   const { medium } = snippet.thumbnails;

// // //   return (
// // //     <div className={`flex m-2 ${!theme ? 'text-white' : 'text-black'}`}>
// // //       <div className="w-1/3">
// // //         <img className="w-full h-full rounded-lg object-cover" alt="seach" src={medium.url} />
// // //       </div>

// // //       <div className="w-2/3 ml-3">
// // //         <h1 className="font-bold line-clamp-1 overflow-hidden">{title}</h1>

// // //         <div className="flex pt-2 items-center">
// // //           <img
// // //             className="w-8 h-8 rounded-full"
// // //             alt="channel logo"
// // //             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGuafeZPHbbEvob9OolK9lNmUtF7B80asQjt2oMTB6lA&s"
// // //           />

// // //           <div className="flex flex-col ml-3">
// // //             <span className="px-3 py-1 font-bold">{channelTitle}</span>
// // //             <TimeAgo publishTime={publishTime} />
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default RelatedCard;




// // import React from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import TimeAgo from './TimeAgo';

// // const RelatedCard = ({ video }) => {
// //   console.log('loo', video);

// //   const dispatch = useDispatch();
// //   const theme = useSelector((store) => store.app.theme);

// //   const { snippet } = video;

// //   if (!snippet) return null;

// //   const { title, channelTitle, description, liveBroadcastContent, publishTime, thumbnails } = video.snippet;

// //   if (!thumbnails || !thumbnails.medium) {
// //     // Handle the case where thumbnails or medium property is undefined
// //     return null;
// //   }
// //   const { medium } = snippet.thumbnails;

// //   return (
// //     <div className={`flex m-2 ${!theme ? 'text-white' : 'text-black'}`}>
// //       <div className="w-1/3">
// //         <img className="w-full h-auto rounded-lg object-cover" alt="seach" src={medium.url} />
// //       </div>

// //       <div className="w-2/3 ml-3">
// //         <h1 className="font-bold line-clamp-1 overflow-hidden">{title}</h1>

// //         <div className="flex pt-2 items-center">
// //           <img
// //             className="w-8 h-8 rounded-full"
// //             alt="channel logo"
// //             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGuafeZPHbbEvob9OolK9lNmUtF7B80asQjt2oMTB6lA&s"
// //           />

// //           <div className="flex flex-col ml-3">
// //             <span className="px-3 py-1 font-bold">{channelTitle}</span>
// //             <TimeAgo publishTime={publishTime} />
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default RelatedCard;



// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import TimeAgo from './TimeAgo';

// const RelatedCard = ({ video }) => {
//   const dispatch = useDispatch();
//   const theme = useSelector((store) => store.app.theme);

//   const { snippet } = video;

//   if (!snippet) return null;

//   const { title, channelTitle, publishTime, thumbnails } = snippet;

//   if (!thumbnails || !thumbnails.medium) {
//     // Handle the case where thumbnails or medium property is undefined
//     return null;
//   }
//   const { medium } = thumbnails;

//   return (
//     <div className={`flex m-2 ${!theme ? 'text-white' : 'text-black'}`}>
//       <div className="w-1/3">
//         <img className="w-full h-auto rounded-lg object-cover" alt="seach" src={medium.url} />
//       </div>

//       <div className="w-2/3 ml-3">
//         <h1 className="font-bold line-clamp-3 overflow-hidden">{title}</h1>

//         <div className="flex pt-2 items-center">
//           <img
//             className="w-8 h-8 rounded-full"
//             alt="channel logo"
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGuafeZPHbbEvob9OolK9lNmUtF7B80asQjt2oMTB6lA&s"
//           />

//           <div className="flex flex-col ml-3">
//             <span className="px-3 py-1 font-bold">{channelTitle}</span>
//             <TimeAgo publishTime={publishTime} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RelatedCard;


import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TimeAgo from './TimeAgo';
import { Link } from 'react-router-dom';

const RelatedCard = ({ video }) => {
  const dispatch = useDispatch();
  const theme = useSelector((store) => store.app.theme);

  const { snippet } = video;

  if (!snippet) return null;

  const { title, channelTitle, publishTime, thumbnails } = snippet;

  if (!thumbnails || !thumbnails.medium) {
    // Handle the case where thumbnails or medium property is undefined
    return null;
  }
  const { medium } = thumbnails;

  return (
    <Link
           
    >
    <div className={`flex m-2 ${!theme ? 'text-white' : 'text-black'}`}>
      <div className="flex-shrink-0 w-1/3">
        <img className="w-full h-auto rounded-lg object-cover" alt="seach" src={medium.url} />
      </div>

      <div className="flex flex-col ml-3 w-2/3">
        <h1 className="font-bold line-clamp-1 overflow-hidden">{title}</h1>

        <div className="flex pt-2 items-center">
          <img
            className="w-8 h-8 rounded-full"
            alt="channel logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGuafeZPHbbEvob9OolK9lNmUtF7B80asQjt2oMTB6lA&s"
          />

          <div className="flex flex-col ml-3">
            <span className="px-3 py-1 font-bold">{channelTitle}</span>
            <TimeAgo publishTime={publishTime} />
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default RelatedCard;
