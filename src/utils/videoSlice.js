// import { createSlice } from "@reduxjs/toolkit";

// const videoSlice =createSlice({
//     name:"video",
//     initialState:{
//         popularVideo:[],
//         videoDetails:null,
//         channelDetails:null,
//         channelAllVideo:null,
//     },
//     reducers:{
//         addPopularVideo:(state,action)=>{
//             state.popularVideo=[state.popularVideo,action.payload];
//         }
//     }
// })

// export const{
//     addPopularVideo,
// }=videoSlice.actions;

// export default videoSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name: "video",
    initialState: {
        popularVideo: [],
        videoDetails: null,
        channelDetails: null,
        channelAllVideos: null,
        selectedCategory:null,
    },
    reducers: {
        addPopularVideo: (state, action) => {
            // state.popularVideo = [...state.popularVideo, ...action.payload];
            state.popularVideo = [state.popularVideo, ...action.payload];
        },
        addVideoDetails:(state,action)=>{
            state.videoDetails=action.payload;
        },
        addChannelDetails:(state,action)=>{
            state.channelDetails=action.payload;
        },
        addChannelAllVideos:(state,action)=>{
            state.channelAllVideos=action.payload;
        },
        addSelectedCategory:(state,action)=>{
          state.selectedCategory=action.payload;  
        }
    },
});

export const { 
    addPopularVideo,
    addChannelAllVideos,
    addChannelDetails,
    addVideoDetails,
 } = videoSlice.actions;

export default videoSlice.reducer;
